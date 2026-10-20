interface MajorCredits {
  credits: number;
  __brand: 'Major';
}

interface MinorCredits {
  credits: number;
  __brand: 'Minor';
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits,
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Major',
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits,
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'Minor',
  };
}

const majorCredits = sumMajorCredits(
  { credits: 3, __brand: 'Major' },
  { credits: 4, __brand: 'Major' },
);
const minorCredits = sumMinorCredits(
  { credits: 2, __brand: 'Minor' },
  { credits: 1, __brand: 'Minor' },
);

console.log(majorCredits, minorCredits);
