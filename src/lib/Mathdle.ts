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

export function validateEquation(word: string, solution: string) {
  const wordSplitted = word.split("")
  const solutionSplitted = solution.split("")

  // Falls back to wrong
  const output = wordSplitted.map((char) => ({ correct: CharState.Wrong, char }))

  // First Pass: Check correct character in correct place
  solutionSplitted.forEach((sChar, idx) => {
    const char = wordSplitted[idx]

    // If matching character or normalized char, and in correct position
    if (char === sChar) {
      solutionSplitted[idx] = null
      wordSplitted[idx] = null

      output[idx] = { correct: CharState.Correct, char: sChar }
    }
  })

  // Second Pass: Check out-of-place characters
  solutionSplitted.forEach((_sChar, idx) => {
    const char = wordSplitted[idx]

    if (char) {
      // If matching character or normalized char, and in correct position
      if (
        // If the solution has normalized char in other position, but only once
        solutionSplitted.includes(char)
      ) {
        // Remove one matching char from solution, so that it cannot be matched again
        const idx1 = solutionSplitted.indexOf(char)
        let correctChar

        if (idx1 !== -1) {
          correctChar = solutionSplitted[idx1]

          solutionSplitted[idx1] = null
          wordSplitted[idx] = null
        }

        output[idx] = { correct: CharState.OutOfPlace, char: correctChar }
      }
    }
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

        if (layout[c] === CharState.Wrong) {
          layout[c] = CharState.NotUsed
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
