let company = ['bloomberg', 'microsoft', 'uber', 'google', 'ibm', 'netflix'];

// Remove 1st elemnet

// company.shift();
console.log(company.shift());
console.log(company);


// Remove Uber and Add Ola

company.splice(1, 1, "Ola")
console.log(company);


// Add amazon at last

company.push("Amazon")
console.log(company);