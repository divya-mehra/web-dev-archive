// separate letters

let words = document.querySelectorAll('.word')

words.forEach((word) => {
    let wordText = word.textContent.trim();
    let wordHtml =  '';

    for (let i = 0; i <wordText.length; i++) {
        let char = wordText[i]

        if(char === " ") {
            // wordHtml+= " "
        } else {
            wordHtml += `<span class="letter">${char}</span>`
        }
    }

    word.innerHTML = wordHtml;
})


let letters = document.querySelectorAll('.letter')

let update = (e) => {
    e.target.classList.toggle("added")
    
}

letters.forEach((letter) => {
    letter.addEventListener('mouseenter', update);  // When an element is clicked, run the update function
});

// import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// const data = ["Digital Humanities"];
// const letterPaths = [
//   "M5.08808 27.0001H0.894897L10.3168 0.818237H14.8807L24.3026 27.0001H20.1094L12.7074 5.57392H12.5029L5.08808 27.0001Z",
// ];

// // Define final path (morph into a different shape, for example a slightly modified 'A')
// const finalPath = "M0 26.1818H4.19318H23.4077L13.9858 0H9.42188L0 26.1818Z";


// const svg = d3.select("svg");

// const path = svg
//   .append("path")
//   .attr("d", letterPaths[0])  // Use the "A" path data
//   .attr("fill", "black");
  
  

// // Animate the letter path
// setTimeout(() => {
//     path.transition()
//       .duration(2000)  // Transition duration
//       .attr("d",   finalPath,
//       );  // Morph to a different path
//   }, 1000);  // 3000 milliseconds delay before starting the transition