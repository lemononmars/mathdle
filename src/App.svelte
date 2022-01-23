<script lang="ts">
  import "twind/shim"
  import Head from "./lib/Head.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"
  import { CharState, validateEquation, getShareResults, layout } from "./lib/Mathdle"
  import { evaluate } from 'mathjs'
  import { tick } from "svelte"
  import Random  from "./lib/Random.ts"
  import Modal from "./lib/Modal.svelte"
  import { store } from "./lib/store"

  const url = "https://lemononmars.github.io/puzzles/mathdle"
  const title = "Mathdle"

  const menuItems = [
    { name: "Report a bug?", url: "https://m.me/sakulbuth" },
    { name: "Original (Thwordle)", url: "https://github.com/narze/thwordle"},
    { name: "Github", url: "https://github.com/lemononmars/mathdle" },
  ]

  const description = "Wordle clone, but it's Math."
  const imageUrl =
    ""

  const gtagId = "G-YTV7TZ3EMC"
  const numberRows = groupArr(
    "1234506789+-*/=".split(""),
    5
  ).map((row) => row.join(""))

  // January 24, 2022 Game Epoch
  const epochMs = 1642957200000
  const now = Date.now()
  const msInDay = 86400000
  const dateIndex = Math.floor((now - epochMs) / msInDay)

  let input = ""
  let solution = getSolution(dateIndex)
  let attempts: string[] = $store.data[dateIndex]?.attempts || []
  let validations = attempts.map((word) => validateEquation(word, solution))
  let gameEnded = !!$store.data[dateIndex]?.win
  let attemptsContainer
  let modal = true
  let copied = false

  $: solutionLength = solution.length
  $: input = input.replace(/[^0-9\+\-\*\/\=]/g, "")
  $: splittedInput = input.split("")
  $: alphabetsLayoutRows = layout(numberRows, validations.flat())
  $: {
    store.set({ data: { ...$store.data, [`${dateIndex}`]: { attempts, win: gameEnded } } })
  }

  const colors = {
    [CharState.Correct]: "bg-green-500 border-green-500",
    [CharState.OutOfPlace]: "bg-yellow-500 border-yellow-500",
    [CharState.Wrong]: "bg-gray-500 border-gray-500",
    [CharState.NotUsed]: "bg-white",
  }

  function onKeypress(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault()
      submit()
    }

    if (splittedInput.length >= solutionLength + 1) {
      e.preventDefault()
      return
    }
  }

  async function submit() {
    if (gameEnded) {
      return
    }

    // Check if the length is valid
    if (input.length != solutionLength) {
      alert("Please match the input length")
      return
    }

    let splittedEquation = input.split("=")
    if (splittedEquation.length == 1) {
      alert("Equals sign missing (=)")
      return
    }

    if (splittedEquation.length > 2) {
      alert("Too many equals sign!")
      return
    }

    let left:number, right:number
    try{
      left = evaluate(splittedEquation[0])
      right = evaluate(splittedEquation[1])
    }
    catch(error){
      alert("Invalid expression")
      return
    }

    if(left != right) {
      alert("Invalid equation: " + left + "≠" + right)
      return
    }

    // Add to solution array
    attempts = [...attempts, input]

    const validation = validateEquation(input, solution)
    validations = [...validations, validation]

    // if all validation is correct
    let win = true
    validation.forEach((v) => {
      if (v.correct !== CharState.Correct) {
        win = false
      }
    })

    if (win) {
      alert("You won!")
      gameEnded = true
    }

    input = ""

    await tick()
    attemptsContainer.scrollTop = attemptsContainer.scrollHeight
  }

  function getSolution(seed: number){
    // simple equation for now:
    // N1 S1 N2 = N3 S2 N4
    const symbols = "+-/*".split("")
    let random = new Random(seed)
    let n1 = 0, n2 = 0, n3 =0, n4 = 0
    let s1 = symbols[random.nextInt32([0,3])]
    n2 = random.nextInt32([1,10])
    // in case of division, change the pair from (n1, n2) to (n1*n2, n2) instead
    switch(s1){
      case "/": n1 = n2 * random.nextInt32([2,9]); break;
      case "-": n1 = n2 + random.nextInt32([1,10]); break;
      case "*": n1 = random.nextInt32([2,9]); break;
      case "+": n1 = random.nextInt32([1,10]); break;
      default:;
    }

    const left = evaluate(n1 + s1 + n2)

    let s2 = symbols[random.nextInt32([0,2])] // excluding * for now to avoid checking stuff
    n4 = random.nextInt32([1,10])
    switch(s2){
      case "+": n3 = left - n4; break;
      case "-": n3 = left + n4; break;
      case "/": n3 = left * n4; break;
      default:;
    }

    return "" + n1 + s1 + n2 + "=" + n3 + s2 + n4
  }
  function copyResult() {
    const results = getShareResults(validations)

    navigator.clipboard.writeText(
      `#Mathdle Day ${dateIndex + 1} (${results.length} attempts)\n\n${results.join("\n")}`
    )

    copied = true

    setTimeout(() => {
      copied = false
    }, 2000)
  }

  function groupArr(data, n) {
    var group = []
    for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++
      group[j] = group[j] || []
      group[j].push(data[i])
    }
    return group
  }
</script>

<div class="footer-wrapper">
  <Menu items={menuItems} />
  <Social {url} {title} />
</div>
<Head {title} {description} {url} {imageUrl} {gtagId} />

<main class="w-full h-screen py-4 flex flex-col items-center">
  <h1 class="text-6xl text-green-400 flex flex-col mb-4">
    <span>{title}<span class="text-sm text-gray-400 ml-2">Beta</span></span>
  </h1>

  Day {dateIndex + 1}

  <!-- DEBUG: Solution word -->
  <!-- <input type="text" class="border" bind:value={solution} /> -->
  <!-- Check Solution -->
  <div class="attempts grow overflow-y-auto" bind:this={attemptsContainer}>
    {#each attempts as input}
      <div class="flex justify-center my-1">
        {#each validateEquation(input, solution) as { correct, char }}
          <div
            class={`${
              colors[correct] || "bg-white"
            } w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`}
          >
            {char ?? ""}
          </div>
        {/each}
      </div>
    {/each}
    {#if !gameEnded}
      <div class="flex justify-center my-1">
        {#each new Array(solutionLength).fill(0) as _, i}
          <div
            class={`bg-white w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`}
          >
            {splittedInput[i] || ""}
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Word Input -->
  <!-- svelte-ignore a11y-autofocus -->
  <input
    type="text"
    class="border px-4 py-2 text-center w-64"
    on:keypress={onKeypress}
    bind:value={input}
    disabled={gameEnded}
    placeholder="Click here to use keyboard input"
    autofocus
  />

  <!-- Layout -->
  <div class="layout my-4 w-full px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
    {#each alphabetsLayoutRows as alphabetsLayout}
      <div class="w-full flex flex-row justify-center">
        {#each Object.entries(alphabetsLayout) as [alphabet, correctState]}
          <button
            on:click={() => (input += alphabet)}
            class={colors[correctState] +
              " " +
              "flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black"}
          >
            {alphabet}
          </button>
        {/each}
      </div>
    {/each}
  </div>

  <!-- Input word -->
  <div class="mb-16 text-center">
    {#if gameEnded}
      <button
        on:click={copyResult}
        class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
      >
        {copied ? "Copied" : "Share"}
      </button>
    {:else}
      <div class="flex flex-row justify-center">
        <button
          on:click={submit}
          class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
        >
          Enter</button
        >
        <button
          on:click={() => {
            input = ""
          }}
          class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-red-300 border-red-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
        >
          Clear</button
        >
      </div>
    {/if}
  </div>

  <!-- Debug -->
  <!-- <div class="flex justify-center my-20">
    <div>DEBUG</div>
    {JSON.stringify(attempts)}
  </div> -->
  {#if modal}
    <Modal
      onClose={() => {
        modal = false
      }}
    />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }

  .attempts {
    min-height: 96px;
  }

  @media (max-height: 750px) {
    .footer-wrapper {
      display: none;
    }
  }
</style>
