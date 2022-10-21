const csv = require('csv-parser')
const fs = require('fs')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter= createCsvWriter({
    path: 'sample1.csv',
    header :[
        {id: "Sno", title:"Sno"},
        {id:"Name", title:"Student Name (As per College/University Records)"},
        {id:"URN",  title:"URN (University Registration Number)"},
        {id:"College", title:"College Name"},
        {id:"Email", title:"Email Address"},
        {id:"Mobile", title:"Mobile No"},
        {id:"10th School", title:"10th School"},
        {id:"10th Year", title:"10th Year"},
        {id:"10th Board", title:"10th Board"},
        {id:"10th Percentage", title:"10th Percentage"},
        {id:"10th Grade", title:"10th Grade"},
        {id:"12th School", title:"12th School"},
        {id:"12th year", title:"12th year"},
        {id:"12th Board", title:"12th Board"},
        {id:"12th Percentage", title:"12th Percentage"},
        {id:"Graduation Degree", title:"Graduation Degree"},
        {id:"Graduation Specialisation", title:"Graduation Specialisation"},
        {id:"Graduation College", title:"Graduation College"},
        {id:"Graduation Year", title:"Graduation Year"},
        {id:"Graduation Grade", title:"Graduation Grade"},
        {id:"Backlock", title:"Back lock"},
    ]
})


csvCheck = async () =>{
    const result = [];
    let ans = await fs.createReadStream('sample.csv')
        .pipe(csv({}))
        .on('data',(data)=>{result.push(data);})
        .on('end',async ()=>{
            let res = await csvWriter.writeRecords(result)
        });
}
csvCheck();