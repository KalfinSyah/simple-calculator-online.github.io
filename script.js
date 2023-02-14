const displayer = document.querySelector('.displayer');
const number_button = document.querySelectorAll('.number button');
const number_button_array = Array.prototype.slice.call(number_button);
const assignment = document.querySelectorAll('.assignment button');
const assignment_button_array = Array.prototype.slice.call(assignment);

let displayer_buffer = [displayer.innerHTML];
// use eval()

// function require_assignment_symbol(bufffer) {
//     if(displayer_buffer[displayer_buffer.length - 1] != '=' ||
//     displayer_buffer[displayer_buffer.length - 1] != '+' ||
//     displayer_buffer[displayer_buffer.length - 1] != '*' ||
//     displayer_buffer[displayer_buffer.length - 1] != '-' || 
//     displayer_buffer[displayer_buffer.length - 1] != '/' ||  
//     displayer_buffer[displayer_buffer.length - 1] != '.') {
//     switch(bufffer) {
//         case '':
//           // code block
//           break;
//         case y:
//           // code block
//           break;
//         default:
//           // code block
//       } {
//         displayer.innerHTML += '.';
//         return displayer.innerHTML.split('');
//  }
// }
number_button_array.forEach(element => {
    element.addEventListener('click', function(){
        if(displayer.innerHTML == '0'){
            displayer.innerHTML = element.value
            
        } else if(displayer.innerHTML) {        
            displayer.innerHTML += element.value
        }
    });
});

assignment_button_array.forEach(buffer => {
    buffer.addEventListener('click', function(){
        switch(buffer.getAttribute('class')) {
            case 'delete_all':
                displayer.innerHTML = '0';
                displayer_buffer = [displayer.innerHTML];
                break;
            case 'delete_one':
                if(displayer.innerHTML != '0' && displayer.innerHTML.length > 1) {
                    displayer.innerHTML = displayer.innerHTML.substring(0, displayer.innerHTML.length - 1);
                } else if(displayer.innerHTML != '0' && displayer.innerHTML.length == 1){
                    displayer.innerHTML = '0';
                }
                break;
            case 'open_bracket':
                if(displayer.innerHTML.length == 1 && displayer.innerHTML.substring(-1,1) == 0) {
                    displayer.innerHTML = '(';
                } else {
                    displayer.innerHTML += '(';
                }
                break;
            case 'close_bracket':
                displayer.innerHTML += ')';
                break;
            case 'float':
                displayer.innerHTML += '.';
                break;   
            case 'sum':
                displayer.innerHTML += '+';
                break;
            case 'multiple':
                displayer.innerHTML += '*';
                break;
            case 'minus':
                displayer.innerHTML += '-';
                break;
            case 'devide':
                displayer.innerHTML += '/';
                break;
            case 'equal':
                if (displayer.innerHTML.length == 1) {
                    displayer.innerHTML = `Error! Please check your input!`;
                } else {
                    try {
                        displayer.innerHTML += `=${eval(displayer.innerHTML)}`;
                    } catch {
                        displayer.innerHTML += ` ==> Error! Please check your input!`;
                    }
                }
                break;
        } 
    });
});

// const displayer = document.querySelector('.displayer');
// const number_button = document.querySelectorAll('.number button');
// const number_button_array = Array.prototype.slice.call(number_button);
// const assignment = document.querySelectorAll('.assignment button');
// const assignment_button_array = Array.prototype.slice.call(assignment);

// let value_buffer;
// let new_value;
// let value;
// let final_value;
// let displayer_buffer = [displayer.innerHTML];
// let temporary_displayer_buffer;

// console.log(3+1-2/2);

// number_button_array.forEach(element => {
//     element.addEventListener('click', function(){
//         if(displayer.innerHTML == '0'){
//             displayer.innerHTML = element.value;
//             displayer_buffer = displayer.innerHTML.split(' ');
            
//         } else if(displayer.innerHTML) {
//             displayer.innerHTML += element.value;
//             displayer_buffer = displayer.innerHTML.split(' ');
//         }
//     });
// });

// assignment_button_array.forEach(element => {
//     element.addEventListener('click', function(){
//         if(element.getAttribute('class') == 'delete_all') {
//             displayer.innerHTML = '0';
//             displayer_buffer = [displayer.innerHTML];
//         } else if(element.getAttribute('class') == 'delete_one') {  
//             if(displayer.innerHTML != '0' && displayer.innerHTML.length > 1) {
//                 displayer.innerHTML = displayer.innerHTML.substring(0, displayer.innerHTML.length - 1);
//                 displayer_buffer = displayer.innerHTML.split(' ').filter(init => init != '');
//             } else if(displayer.innerHTML != '0' && displayer.innerHTML.length == 1){
//                 displayer.innerHTML = '0';
//                 displayer_buffer = displayer.innerHTML.split(' ').filter(init => init != '');
//             } else {}
//         } else if(element.getAttribute('class') == 'float') {
//             if(displayer_buffer[displayer_buffer.length - 1].includes('.') || 
//                 displayer_buffer[displayer_buffer.length - 1] == '+' || 
//                 displayer_buffer[displayer_buffer.length - 1] == '=') {} else {
//                 displayer.innerHTML += '.';
//                 displayer_buffer = displayer.innerHTML.split(' ');
//             }
//         } else if(element.getAttribute('class') == 'sum') {
//             if(displayer_buffer[displayer_buffer.length - 1] == '+' || 
//                displayer_buffer[displayer_buffer.length - 1] == '=' || 
//                (displayer_buffer[displayer_buffer.length - 1].split(''))[(displayer_buffer[displayer_buffer.length - 1].split('')).length - 1] == '.'){} else{
//                 displayer.innerHTML += ' + ';
//                 displayer_buffer = displayer.innerHTML.split(' ').filter(init => init != '');
//             }
//         } else if(element.getAttribute('class') == 'multiple') {
//             if(displayer_buffer[displayer_buffer.length - 1] == '+' || 
//                displayer_buffer[displayer_buffer.length - 1] == 'x' ||
//                displayer_buffer[displayer_buffer.length - 1] == '-' || 
//                displayer_buffer[displayer_buffer.length - 1] == ':' ||  
//                displayer_buffer[displayer_buffer.length - 1] == '=' || 
//                (displayer_buffer[displayer_buffer.length - 1].split(''))[(displayer_buffer[displayer_buffer.length - 1].split('')).length - 1] == '.'){} else{
//                 displayer.innerHTML += ' x ';
//                 displayer_buffer = displayer.innerHTML.split(' ').filter(init => init != '');
//             }
//         } else if(element.getAttribute('class') == 'minus') {
//             if(displayer_buffer[displayer_buffer.length - 1] == '+' ||
//                displayer_buffer[displayer_buffer.length - 1] == 'x' ||
//                displayer_buffer[displayer_buffer.length - 1] == '-' || 
//                displayer_buffer[displayer_buffer.length - 1] == ':' ||  
//                displayer_buffer[displayer_buffer.length - 1] == '=' || 
//                (displayer_buffer[displayer_buffer.length - 1].split(''))[(displayer_buffer[displayer_buffer.length - 1].split('')).length - 1] == '.'){} else{
//                 displayer.innerHTML += ' - ';
//                 displayer_buffer = displayer.innerHTML.split(' ').filter(init => init != '');
//             }
//         } else if(element.getAttribute('class') == 'devide') {
//             if(displayer_buffer[displayer_buffer.length - 1] == '+' || 
//                displayer_buffer[displayer_buffer.length - 1] == 'x' ||
//                displayer_buffer[displayer_buffer.length - 1] == '-' || 
//                displayer_buffer[displayer_buffer.length - 1] == ':' || 
//                displayer_buffer[displayer_buffer.length - 1] == '=' || 
//                (displayer_buffer[displayer_buffer.length - 1].split(''))[(displayer_buffer[displayer_buffer.length - 1].split('')).length - 1] == '.'){} else{
//                 displayer.innerHTML += ' : ';
//                 displayer_buffer = displayer.innerHTML.split(' ').filter(init => init != '');
//             }
//         } else if(element.getAttribute('class') == 'equal'){
//             if(displayer_buffer[displayer_buffer.length - 1] == '=' ||
//                displayer_buffer[displayer_buffer.length - 1] == '+' ||
//                displayer_buffer[displayer_buffer.length - 1] == 'x' ||
//                displayer_buffer[displayer_buffer.length - 1] == '-' || 
//                displayer_buffer[displayer_buffer.length - 1] == ':' ||  
//                (displayer_buffer[displayer_buffer.length - 1].split(''))[(displayer_buffer[displayer_buffer.length - 1].split('')).length - 1] == '.'){} else {
//                 displayer.innerHTML += ' = ';
//                 displayer_buffer = displayer.innerHTML.split(' ').filter(init => init != '');
//             }
//         }

//     });
// });