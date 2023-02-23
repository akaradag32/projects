function parseInt(string) {
  var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (string === "zero") return 0;

  var total = 0;

  var Millions = string.split("million")[0];

  if (Millions.indexOf('hundred') > -1) {
    var millions2 = Millions.split('hundred')[0];
    a.some(x => )
  } else {
    
  }


  return Millions;
}

console.log(parseInt("one hundred million"));
