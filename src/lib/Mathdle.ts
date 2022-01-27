import Random  from "./Random"
import { evaluate } from 'mathjs'

export enum CharState {
  Correct = 0,
  OutOfPlace,
  Wrong,
  NotUsed,
}

const emojiColors = {
  [CharState.Correct]: "🟩",
  [CharState.OutOfPlace]: "🟨",
  [CharState.Wrong]: "⬜",
}

const DIFFICULTY_HARD = 2

export function validateEquation(word: string, solution: string, difficulty: number) {
  const inputSplitted = word.split("")
  const forbiddenIndices = word.replace(/[\+\-\*\/\=]/g, "").split("").map((c)=>parseInt(c)-1)
  const solutionSplitted = solution.split("")

  // Falls back to wrong or unused
  let output
  if(difficulty === DIFFICULTY_HARD) 
    output = inputSplitted.map((char, idx) => ({ 
      correct: inputSplitted.includes("" + (idx+1))? CharState.NotUsed: CharState.Wrong, char 
    }))
  else
    output = inputSplitted.map((char) => ({ 
      correct: CharState.Wrong, char 
    }))

  // pre-check: if everything matches, then it's solved
  let solved = true
  solutionSplitted.forEach((sChar, idx) => {
    if(sChar !== inputSplitted[idx])
      solved = false
  })
  if(solved){
    output.forEach((op) => op.correct = CharState.Correct)
    return output
  }

  // First Pass: Check correct character in correct place
  solutionSplitted.forEach((sChar, idx) => {
    if(difficulty === DIFFICULTY_HARD && forbiddenIndices.includes(idx)) return

    const char = inputSplitted[idx]

    // If matching character or normalized char, and in correct position
    if (char === sChar) {
      solutionSplitted[idx] = null
      inputSplitted[idx] = null

      output[idx] = { correct: CharState.Correct, char: sChar }
    }
  })

  // Second Pass: Check out-of-place characters
  solutionSplitted.forEach((_sChar, idx) => {
    if(difficulty === DIFFICULTY_HARD && forbiddenIndices.includes(idx)) return

    const char = inputSplitted[idx]

    // return when at the correct position, or when the char is not in the solution
    if (!char || !solutionSplitted.includes(char)) return

    // Remove one matching char from solution, so that it cannot be matched again
    const idx1 = solutionSplitted.indexOf(char)
    if(difficulty === DIFFICULTY_HARD && forbiddenIndices.includes(parseInt(char))) return

    const correctChar = solutionSplitted[idx1]
    solutionSplitted[idx1] = null
    inputSplitted[idx] = null

    output[idx] = { correct: CharState.OutOfPlace, char: correctChar }
  })
  return output
}

export function layout(
  alphabetRows: string[],
  validations: Array<{ correct: CharState; char: string }> = []
): Array<Record<string, CharState>> {
  const layoutRows = []

  alphabetRows.forEach((alphabets) => {
    const layout: Record<string, CharState> = {}

    alphabets.split("").forEach((a, idx) => {
      layout[a] = CharState.NotUsed
    })

    validations.forEach(({ correct, char }) => {
      char.split("").forEach((c) => {
        if (correct < layout[c]) {
          // Correct < OutOfPlace < Wrong < Unused
          layout[c] = correct
        }
      })
    })

    layoutRows.push(layout)
  })

  return layoutRows
}

export function getShareResults(attempts: Array<Array<Partial<{ correct: CharState }>>>) {
  return attempts.map((attempt) => {
    return attempt
      .map(({ correct }) => {
        return emojiColors[correct]
      })
      .join("")
  })
}

export function getSolutions(seed: number){
    
  let sols = ["", "", ""]
  const symbols = "+-/*".split("")
  let random = new Random(seed)
  let n1 = 0, n2 = 0, n3 =0, n4 = 0

  // easy: just
  // N1 S1 N2 = N3
  // or N1 = N2 S1 N3
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
  n3 = evaluate(n1 + s1 + n2)
  if(random.nextInt32([0,1]))
    sols[0] = "" + n1 + s1 + n2 + "=" + n3
  else
    sols[0] = "" + n3 + "=" + n1 + s1 + n2

  // medium: simple equation for now:
  // N1 S1 N2 = N3 S2 N4
  s1 = symbols[random.nextInt32([0,3])]
  n2 = random.nextInt32([1,10])
  // in case of division, change the pair from (n1, n2) to (n1*n2, n2) instead
  switch(s1){
    case "/": n1 = n2 * random.nextInt32([2,9]); break;
    case "-": n1 = n2 + random.nextInt32([1,10]); break;
    case "*": n1 = random.nextInt32([2,9]); break;
    case "+": n1 = random.nextInt32([1,10]); break;
    default:;
  }

  let left = evaluate(n1 + s1 + n2)

  let s2 = symbols[random.nextInt32([0,2])] // exclude * for now to avoid checking for divisors
  n4 = random.nextInt32([1,10])
  switch(s2){
    case "+": n3 = left - n4; break;
    case "-": n3 = left + n4; break;
    case "/": n3 = left * n4; break;
    default:;
  }
  sols[1] = "" + n1 + s1 + n2 + "=" + n3 + s2 + n4

  // hard: new rule
  s1 = symbols[random.nextInt32([0,3])]
  n2 = random.nextInt32([1,10])
  switch(s1){
    case "/": n1 = n2 * random.nextInt32([2,9]); break;
    case "-": n1 = n2 + random.nextInt32([1,10]); break;
    case "*": n1 = random.nextInt32([2,9]); break;
    case "+": n1 = random.nextInt32([1,10]); break;
    default:;
  }

  left = evaluate(n1 + s1 + n2)

  s2 = symbols[random.nextInt32([0,2])] // exclude * for now to avoid checking for divisors
  n4 = random.nextInt32([1,10])
  switch(s2){
    case "+": n3 = left - n4; break;
    case "-": n3 = left + n4; break;
    case "/": n3 = left * n4; break;
    default:;
  }
  sols[2] = "" + n1 + s1 + n2 + "=" + n3 + s2 + n4

  return sols
}
