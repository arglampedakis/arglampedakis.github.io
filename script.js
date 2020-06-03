var addStudentNum=4;
function addStudentToTable(){
    let fName = document.getElementById('stdFName').value;
    let lName = document.getElementById('stdLName').value;
    let dateOfBirth = document.getElementById('dateOfBirth').value;
    let tuitionFees = document.getElementById('tuitionFees').value;

        if (fName !='' 
            && lName !='' 
            && dateOfBirth !='' 
            && tuitionFees !=''){
          
        let table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

        let newRow = table.insertRow();
        
        let stNumCell = newRow.insertCell(0);
        let fNameCell = newRow.insertCell(1);
        let lNameCell = newRow.insertCell(2);
        let dateOfBirthCell = newRow.insertCell(3);
        let tuitionFeesCell = newRow.insertCell(4);
            
        let fNameNode = document.createTextNode(fName);
        let lNameNode = document.createTextNode(lName);
        let dateOfBirthNode = document.createTextNode(dateOfBirth);
        let tuitionFeesNode = document.createTextNode(tuitionFees);
        let numNode= addStudentNum;
        

        stNumCell.append(numNode);
        addStudentNum++;
        fNameCell.append(fNameNode);
        lNameCell.append(lNameNode);
        dateOfBirthCell.append(dateOfBirthNode);
        tuitionFeesCell.append(tuitionFeesNode);
    }else{
        alert('Please fill all the inputs');
    }    
}


document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
});

var addcourseNum=4;

function checkCourseInputsAndAddToTable(){
        let title = document.getElementById('courseTitle').value;
        let stream = document.getElementById('courseStream').value;
        let types = document.getElementsByName('type');
        let selectedType = radioOptionSelected(types);
        
        function radioOptionSelected(radios){
            for (let i = 0, length = radios.length; i <= length; i++) {

                    if(i==length){
                        return -1;
                        break;
                    }
                    if (radios[i].checked) {
                    return radios[i].value;
                    break;
                    }
                
                }
        }
        
        let startDate = document.getElementById('startDate').value;
        let endDate = document.getElementById('endDate').value;

        if(title.startsWith('CB') 
            && (stream == 'Java' || stream == 'C#')
                && selectedType != -1
                    && startDate != undefined
                        && endDate != undefined){

                            // checking that the end date will be after start date
                            const stDate = document.getElementById('startDate');
                            const eDate = document.getElementById('endDate');
                            const from = stDate.valueAsDate;
                            const to = eDate.valueAsDate;
                                if(from>=to){
                                    alert('Please enter valid dates')
                                }else{

                        
                                    let table = document.getElementById('coursesTable').getElementsByTagName('tbody')[0];

                                    let newRow = table.insertRow();
                                    
                                    let numCell = newRow.insertCell(0);
                                    let titleCell = newRow.insertCell(1);
                                    let streamCell = newRow.insertCell(2);
                                    let typeCell = newRow.insertCell(3);
                                    let startDateCell = newRow.insertCell(4);
                                    let endDateCell = newRow.insertCell(5);

                                    
                                    let titleNode = document.createTextNode(title);
                                    let streamNode = document.createTextNode(stream);
                                    let typeNode = document.createTextNode(selectedType);
                                    let startDateNode = document.createTextNode(startDate);
                                    let endDateNode = document.createTextNode(endDate);
                                    let numNode= addcourseNum;
                                    

                                    numCell.append(numNode);
                                    addcourseNum++;
                                    titleCell.append(titleNode);
                                    streamCell.append(streamNode);
                                    typeCell.append(typeNode);
                                    startDateCell.append(startDateNode);
                                    endDateCell.append(endDateNode);

                                }
                                
                                    
                        }else{
        alert('Please enter valid inputs');
        }
    
}


var addTrainerNum=4;
function addTrainerToTable(){
    let trfName = document.getElementById('trainerFName').value;
    let trlName = document.getElementById('trainerLName').value;
    let subject = document.getElementById('subject').value;
    
            if(trfName !=''
                    && trlName != ''
                        && subject !=''){
                
                    let table = document.getElementById('trainerTable').getElementsByTagName('tbody')[0];

                    let newRow = table.insertRow();
                    
                    let trNumCell = newRow.insertCell(0);
                    let trfNameCell = newRow.insertCell(1);
                    let trlNameCell = newRow.insertCell(2);
                    let subjectCell = newRow.insertCell(3);
                
                        
                    let trfNameNode = document.createTextNode(trfName);
                    let trlNameNode = document.createTextNode(trlName);
                    let subjectNode = document.createTextNode(subject);
                    let trNumNode= addTrainerNum;
                    

                    trNumCell.append(trNumNode);
                    addStudentNum++;
                    trfNameCell.append(trfNameNode);
                    trlNameCell.append(trlNameNode);
                    subjectCell.append(subjectNode);
        }else{
            alert('Please fill all inputs');
        }
}


var addAssignmentNum=4;
function addAssignmentToTable(){
    let title = document.getElementById('title').value;
    let oMark = document.getElementById('oralMark').value;
    let tMark = document.getElementById('totalMark').value;
    let description = document.getElementById('description').value;
    
    if( title !='' && oMark !='' && tMark !='' && description != ''){

            if(oMark > tMark){
                alert('Oral Mark should be lower than Total Mark')
            }else{
        
            
                    let table = document.getElementById('assignmentTable').getElementsByTagName('tbody')[0];

                    let newRow = table.insertRow();
                    
                    let aNumCell = newRow.insertCell(0);
                    let aTitleCell = newRow.insertCell(1);
                    let oMarkCell = newRow.insertCell(2);
                    let tMarkCell = newRow.insertCell(3);
                    let descriptionCell = newRow.insertCell(4);
                
                        
                    let aTitleNode = document.createTextNode(title);
                    let oMarkNode = document.createTextNode(oMark);
                    let tMarkNode = document.createTextNode(tMark);
                    let descriptionNode = document.createTextNode(description);
                    let aNumNode= addAssignmentNum;
                    

                    aNumCell.append(aNumNode);
                    addAssignmentNum++;
                    aTitleCell.append(aTitleNode);
                    oMarkCell.append(oMarkNode);
                    tMarkCell.append(tMarkNode);
                    descriptionCell.append(descriptionNode);
                            
                }
        }else{
            alert('Please fill all inputs');
        }
}


function selectCourseFromRadioAndAddToFinalTable(){

    let availableCourses = document.getElementsByName('selectRadio');

    function selectedCourse(radioOptions){

        for (let i = 0, length = radioOptions.length; i <= length; i++) {
            if(i==length){
                return -1;
                break;
            }
            if (radioOptions[i].checked) {
            return i;
            break;
            }
            
        }
    }

    let selectedRow = selectedCourse(availableCourses);
    if(selectedRow == -1){
        alert('Please select a course'); 
        // document.getElementById('add').addEventListener('click', function(event){
        //     event.preventDefault();
        // });  should have done this different. Won't work like this.         
    }else{

    let table = document.getElementById('coursesTable').getElementsByTagName('tbody')[0];

    let selected = table.rows[selectedRow].cells;
    
    let finalTableHead = document.getElementById('courseName');

    finalTableHead.innerHTML = selected[1].innerHTML + ' '+ selected[2].innerHTML + ' '+ selected[3].innerHTML;
    }
}

function getCheckedStudetns(studentsTable, checkedStudents){
    let studentTable = document.getElementById(studentsTable).getElementsByTagName('tbody')[0];
    let finalTable = document.getElementById('finalStudentTable').getElementsByTagName('tbody')[0];
    let checkers = document.getElementsByName(checkedStudents);
    let stNum = 1;
    
    
    for( let i=0; i<checkers.length; i++){

        if(checkers[i].checked){
            //get the cells of the selected student
            let selectedStudent = studentTable.rows[i].cells;
            //get the text of the cells
            const stFirstName = selectedStudent[1].innerHTML;
            const stLastName = selectedStudent[2].innerHTML;
            const stDateOfBirth = selectedStudent[3].innerHTML;
            const stTuitionFees = selectedStudent[4].innerHTML;
            //create row on finaltable
            let newRow = finalTable.insertRow();
            // insert cells in the row  
            let stNumCell = newRow.insertCell(0);
            let stFirstNameCell = newRow.insertCell(1);
            let stLastNameCell = newRow.insertCell(2);
            let stDateOfBirthCell = newRow.insertCell(3);
            let tuitionfeesCell = newRow.insertCell(4);
            
    
            //create Nodes to be inserted in the cells
            let stFirstNameNode = document.createTextNode(stFirstName);
            let stLastNameNode = document.createTextNode(stLastName);
            let stDateOfBirthNode = document.createTextNode(stDateOfBirth);
            let tuitionfeesNode = document.createTextNode(stTuitionFees);
            let stNumNode= stNum;
            
            //insert nodes in the cells
            stNumCell.append(stNumNode);
            stNum++;
            stFirstNameCell.append(stFirstNameNode);
            stLastNameCell.append(stLastNameNode);
            stDateOfBirthCell.append(stDateOfBirthNode);
            tuitionfeesCell.append(tuitionfeesNode);

        }
    }

    let finalTableHead = document.getElementById('courseName');
    finalTableHead.removeAttribute("hidden");
    let entireFinalTable = document.getElementById('finalStudentTable')
    entireFinalTable.removeAttribute("hidden");
}



