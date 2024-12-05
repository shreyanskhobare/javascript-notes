/**
 * ************ FILTER UNLIKE FOR...EACH ACTUALLY RETURNS SOMETHING.
 * In most cases, they are going to return an Array
 * 
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 * FILTERS are better to use if you are expecting some outcome from iteration. 
 * If you use For...each and are expecting an array in response, then you'll have to define that object outside
 * and keep setting the value inside loop code!
 * 
 */
console.log('************ FILTERS');
const numbers = [23, 33, 44, 64, 20, 51, 92];

// Usung function ()
const evenNumbersFunction = numbers.filter (function (item) {
    if (item % 2 === 0) 
        return item;
})
console.log('Even numbers using function: ' + evenNumbersFunction);
// Even numbers using function: 44,64,20,92


// Using arrow
const evenNumbersArrow = numbers.filter((item) => item % 2 === 0);
console.log('Even numbers using Arrow: ' + evenNumbersFunction);
// Even numbers using Arrow: 44,64,20,92


/**
 * ************  FILTER ON OBJECTS
 */
const companies = [
    {name: 'AB Group', category: 'Finance', start: 1901, end: 1970},
    {name: 'CD Group', category: 'Retail', start: 1945, end: 1989},
    {name: 'EF Group', category: 'Auto', start: 1989, end: 2008},
    {name: 'GH Group', category: 'Retail', start: 1910, end: 1957},
    {name: 'IJ Group', category: 'Finance', start: 2000, end: 2008},
    {name: 'KL Group', category: 'Auto', start: 1952, end: 1955},
    {name: 'MN Group', category: 'Retail', start: 1990, end: 2024},
    {name: 'OP Group', category: 'Auto', start: 1982, end: 1999},
]

/**  Filter # 1 : Get only Retail companies  */
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log('Get only Retail companies');
console.log(retailCompanies, retailCompanies.length);           
// Above will print ARRAY of 3 objects that fulfil the criteria and then length as 3
// {name: 'CD Group', category: 'Retail', start: 1945, end: 1989}
//  {name: 'GH Group', category: 'Retail', start: 1910, end: 1957}
// {name: 'MN Group', category: 'Retail', start: 1990, end: 2024}
// 3      --> length


/** Filter # 2: Companies that started after 1940 and ended before 2005 */
const dateRange = companies.filter(company => company.start >= 1940 && company.end <= 2005);
console.log('Companies that started after 1940 and ended before 2005');
console.log(dateRange);
// Above will print ARRAY of 3 objects that fulfil the criteria
// {name: 'CD Group', category: 'Retail', start: 1945, end: 1989}
// {name: 'KL Group', category: 'Auto', start: 1952, end: 1955}
// {name: 'OP Group', category: 'Auto', start: 1982, end: 1999}



/** Filter # 2: Companies that lasted after 45 years of more */
const silverJubilee = companies.filter(company => company.end - company.start >= 45);
console.log('Companies that lasted after 45 years of more');
console.log(silverJubilee);
// Above will print ARRAY of 3 objects that fulfil the criteria
// {name: 'AB Group', category: 'Finance', start: 1901, end: 1970}
// {name: 'GH Group', category: 'Retail', start: 1910, end: 1957}