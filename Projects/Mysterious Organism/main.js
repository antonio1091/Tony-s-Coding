// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//creating organism factory
const pAequorFactory = (number, mockUpStrand) => {
  return {
    specimenNum: number,
    dna: mockUpStrand,
    mutate() {
      // generate random current base.
      const randomBase = Math.floor(Math.random()*this.dna.length);
      // generate random mutation base.
      const generatedBase = returnRandBase();
      // conditional to confirm if change is going to happen.
      if (this.dna[randomBase] === generatedBase) {
        console.log(`Mutated base ${generatedBase} at index ${randomBase} is identical to the current base ${this.dna[randomBase]} and does not need to be changed.`);
      }
      else {
        console.log(`Current DNA base ${this.dna[randomBase]} at index ${randomBase}.`);
        this.dna[randomBase] = generatedBase;
        console.log(`Mutated DNA base ${generatedBase} at index ${randomBase}.`);
      }
      return this.dna;
    },
    compareDNA (pAequorObject) {
      // Current subject DNA.
      const currentDNA = this.dna;
      // Comparison subject DNA.
      const subjectDNA = pAequorObject.dna;
      // Identical counter.
      let idCounter = 0;
      // Identical counting by iteration.
      for (let i = 0; i < currentDNA.length; i++) {
        if (currentDNA[i] === subjectDNA[i]) {
          idCounter++;
        }
      }
      // Identical percetage calculation.
      let idPercentage = Math.floor((idCounter/currentDNA.length)*100);
      console.log(`Current Specimen # ${this.specimenNum}: ${this.dna}`);
      console.log(`Comparison Specimen # ${pAequorObject.specimenNum}: ${pAequorObject.dna}`);
      console.log(`Percentage of identical DNA strands: ${idPercentage}% in common.`);
    },
    willLikelySurvive () {
      // Current DNA base.
      const dnaBase = this.dna;
      // DNA base counter initialization.
      let baseCounter = 0;
      // Counter check for G and C bases.
      for (let i = 0; i < dnaBase.length; i++) {
        if (dnaBase[i] === 'G' || dnaBase[i] === 'C') {
          baseCounter++;
        }
      }
      // Indicator for survival calculation.
      let indicator = Math.floor((baseCounter/dnaBase.length)*100);
      // If indicator at least 60%, then return true, else, false.
      if (indicator >= 60) {
        return true;
      }
      else {
        return false;
      }
    },
    complementStrand () {
      let dnaBase = this.dna;
      let compBase = [];
      for (let i = 0; i < dnaBase.length; i++){
        switch (dnaBase[i]) {
          case 'A':
            compBase.push('T');
            break;
          case 'T':
            compBase.push('A');
            break;
          case 'C':
            compBase.push('G');
            break;
          case 'G':
            compBase.push('C');
            break;
        }
      }
      console.log(`Current DNA strand for specimen # ${this.specimenNum}: ${this.dna}`);
      console.log(`Complementary DNA strand for specimen # ${this.specimenNum}: ${compBase}`);
    }
  }
}
// Specimen creation array variable for 30 units.
const studyObjects = [];
// Iteration for creation.
for (let i = 1; i < 30; i++) {
  let subject = pAequorFactory(i,mockUpStrand());
  studyObjects.push(subject);
};







