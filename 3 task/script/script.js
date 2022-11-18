const records = [
    {

      number: "1",

      name: "Bill Gates",

      position: "Founder Microsoft",

      salary: "$1000",

      
    },
    {

        number: "2",
  
        name: "Steve Jobs",
  
        position: "Founder Apple",
  
        salary: "$1200",
  
      },
      {

        number: "3",
  
        name: "Larry Pages",
  
        position: "Founder Google",
  
        salary: "$1100",
  
      },
      {

        number: "4",
  
        name: "Mark Zuckeberg",
  
        position: "Founder Facebook",
  
        salary: "$1300",
  
      }
]



let main = document.querySelector('body');
let psdsd = document.createElement('p');
let tabletag = document.createElement('table');
main.append(tabletag);
let tabletr = document.createElement('tr');
tabletag.appendChild(tabletr);
addTh("No.", tabletr, 'th');
addTh("Full Name", tabletr, 'th');
addTh("Position", tabletr, 'th');
addTh("Salary", tabletr, 'th');

    
for (let i = 0; i < records.length; i++) 
{
    createRow(records[i],tabletag);
        
}

    function createRow(record, tabletag)
     {
        let row = document.createElement('tr');
        addTh(record.number, row, "td");
        addTh(record.name, row, "td");
        addTh(record.position, row, "td");
        addTh(record.salary, row, "td");

        tabletag.appendChild(row);

}
    function addTh(text, trtag , elem){
        let tabletitle = document.createElement(elem);
        trtag.appendChild(tabletitle);
        tabletitle.innerText = text;
    }