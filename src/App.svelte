<script lang="ts">
  import "twind/shim"
  import Head from "./lib/Head.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"
  import { CharState, getSolutions, validateEquation, getShareResults, layout } from "./lib/Mathdle"
  import { tick } from "svelte"
  import { evaluate } from 'mathjs'
  import { fade, scale } from "svelte/transition"

  import Modal from "./lib/Modal.svelte"
  import { store } from "./lib/store"

  const url = "https://lemononmars.github.io/mathdle"
  const title = "Mathdle"

  const menuItems = [
    { name: "Found a bug?", url: "https://twitter.com/SakulbuthE/status/1485679790627880960" },
    { name: "Try Boardle", url: "https://lemononmars.github.io/boardle/" },
    { name: "Original (Thwordle)", url: "https://github.com/narze/thwordle"},
    { name: "Github", url: "https://github.com/lemononmars/mathdle" },
  ]

  const description = "Wordle clone, but it's math."
  const imageUrl = "https://i.imgur.com/z8BlEoK.png"

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
  let difficulty = 0
  const difficultyString = ["easy", "medium", "hard"]
  let solutions = getSolutions(dateIndex)
  let attempts: string[][] = $store.data[dateIndex]?.attempts || [[],[],[]]
  let validations = attempts.map((att, idx) => 
    att.map((word)=>validateEquation(word, solutions[idx], difficulty))
  )
  let gameEnded: boolean[] = $store.data[dateIndex]?.win || [false,false,false]
  let attemptsContainer
  let modal = true
  let copied = false

  $: solution = solutions[difficulty]
  $: solutionLength = solution.length
  $: input = input.replace(/[^0-9\+\-\*\/\=]/g, "")
  $: splittedInput = input.split("")
  $: alphabetsLayoutRows = layout(numberRows, validations[difficulty].flat())
  $: {
    store.set({ data: { ...$store.data, [`${dateIndex}`]: 
      {attempts, win: gameEnded}
    }})
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
    if (gameEnded[difficulty]) {
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
      alert("Too many equals signs!")
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
    attempts[difficulty] = [...attempts[difficulty], input]

    const validation = validateEquation(input, solution, difficulty)
    validations[difficulty] = [...validations[difficulty], validation]

    // if all validation is correct
    let win = true
    validation.forEach((v) => {
      if (v.correct !== CharState.Correct) {
        win = false
      }
    })

    if (win) {
      alert("You won!")
      gameEnded[difficulty] = true
    }

    input = ""

    await tick()
    attemptsContainer.scrollTop = attemptsContainer.scrollHeight
  }

  function copyResult() {
    const results = getShareResults(validations[difficulty])

    navigator.clipboard.writeText(
      `#Mathdle Day ${dateIndex + 1} ${difficultyString[difficulty]} (${results.length} attempts)\n\n${results.join("\n")}`
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

  <div class="flex flex-row justify-center">
    <button
      on:click={()=> {difficulty = 0; input = ""}}
      class={`flex text-lg items-center justify-center rounded border mx-2 p-3 ${difficulty == 0? "bg-blue-300 border-blue-300": "bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`}
    >
      Easy</button
    >
    <button
      on:click={() => {difficulty = 1; input = ""}}
      class={`flex text-lg items-center justify-center rounded border mx-2 p-3 ${difficulty == 1? "bg-blue-300 border-blue-300": "bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`}
    >
      Medium</button
    >
    <button
      on:click={() => {difficulty = 2; input = ""}}
      class={`flex text-lg items-center justify-center rounded border mx-2 p-3 ${difficulty == 2? "bg-blue-300 border-blue-300": "bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`}
    >
      Hard</button
    >
  </div>
  {#if difficulty === 2}
    <span class="text-sm text-red-400 ml-3">Additional rule:</span> 
    <span class="text-sm text-black-400 ml-3">For each digit N in your guess, the N-th position will not be checked.</span>
    <span class="text-sm text-gray-400 ml-3">For example, if your guess is 1+2=3, then the first, second, and third position (1, + and 2) will not be checked.</span>
  {/if}
  <!-- DEBUG: Solution word -->
  <!-- <input type="text" class="border" bind:value={solution} /> -->
  <!-- Check Solution -->
  <div class="attempts grow overflow-y-auto" bind:this={attemptsContainer}>
    {#each attempts[difficulty] as input}
      <div class="flex justify-center my-1">
        {#each validateEquation(input, solution, difficulty) as { correct, char }}
          <div in:scale="{{duration: 1000}}" out:fade
            class={`${
              colors[correct] || "bg-white"
            } ${solutionLength > 6? "attempt-box-sm": "attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`}
          >
            {char ?? ""}
          </div>
        {/each}
      </div>
    {/each}
    {#if !gameEnded[difficulty]}
      <div class="flex justify-center my-1">
        {#each new Array(solutionLength).fill(0) as _, i}
          <div
            class={`animate-pulse bg-gray-200 ${solutionLength > 6? "attempt-box-sm": "attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`}
          >
            {splittedInput[i] || ""}
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Word Input -->
  <!-- svelte-ignore a11y-autofocus -->
  {#if !gameEnded[difficulty]}
    <input
      type="text"
      class="border px-4 py-2 text-center w-64"
      on:keypress={onKeypress}
      bind:value={input}
      placeholder="Click here to use keyboard input"
      autofocus
    />
  {/if}

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
    {#if gameEnded[difficulty]}
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
          class="flex items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
        >
          Submit</button
        >
        <button
          on:click={() => {
            input = ""
          }}
          class="flex items-center justify-center rounded border mx-2 p-3 bg-red-300 border-red-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
        >
          Clear</button
        >
        <button
          on:click={() => {
            modal = true
          }}
          class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-pink-300 border-pink-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-100 active:bg-slate-400"
        >
          Rules</button
        >
      </div>
    {/if}
  </div>

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
    min-height: 3.5rem;
  }
  
  .attempt-box-lg{
    width: 3.5rem;
    height: 3.5rem;
  }

  .attempt-box-sm{
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 500px) {
    .footer-wrapper {
      display: none;
    }

    .attempt-box-lg{
      width: 3.5rem;
      height: 3.5rem;
    }

    .attempt-box-sm{
      width: 2rem;
      height: 2rem;
    }
  }
</style>
