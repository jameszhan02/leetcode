const jsdom = require('jsdom')
const SUBMIT_URL =
  'https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub'
const DATA_URL = `https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub`
async function getGoogleDocData(url) {
  try {
    const response = await fetch(url)
    const htmlContent = await response.text()
    const doc = new jsdom.JSDOM(htmlContent)
    const rows = doc.window.document.querySelectorAll('table tr')
    const data = Array.from(rows)
      .slice(1)
      .map((row) => {
        const cells = Array.from(row.querySelectorAll('td')).map((td) =>
          td.textContent.trim()
        )
        return {
          x: parseInt(cells[0]),
          y: parseInt(cells[2]),
          character: cells[1],
        }
      })

    return data
  } catch (error) {
    console.error('fetch table data fail:', error)
  }
}

const drawLetter = (grid) => {
  console.log('Final Ans: ')
  grid.forEach((row) => {
    console.log(row.join(''))
  })
}

const main = async () => {
  const tableData = await getGoogleDocData(SUBMIT_URL)
  //detect size of the string[][] m x n
  const m = Math.max(...tableData.map((data) => data.y)) + 1
  const n = Math.max(...tableData.map((data) => data.x)) + 1
  const reverseY = m - 1
  const matrix = Array(m)
    .fill()
    .map(() => Array(n).fill(' '))
  tableData.forEach((data) => {
    const { x, y, character } = data
    matrix[reverseY - y][x] = character
  })
  drawLetter(matrix)
}

main()
