// 1+2*15+3      1[2],3[1],6[2]            3-1=2     if 2 1+1=2       6-3=3 if 3 3+1+1=4,5

// 55 / 11 / 5

console.log("start the program")

// A utility function to check if
// a given character is operand

function isOperand(c)
{
	return (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0));
}

// utility function to find value of and operand
function value(c)
{
	return (c.charCodeAt(0) - '0'.charCodeAt(0));
}

function extract_digits(exp){
	var s=['/','*','+','-'];
	var dd=[];
	var temp=0;
	var dig='';
	for (let i = 0; i<exp.length; i += 1)
	{
		for(let j=0;j<s.length; j+=1){
			if(exp[i]!=s[j]){
				temp=temp+1;
				//console.log(temp);
			}
		}
		// console.log("out="+temp);
		for(let k=0;k<1;k+=1){
			if(temp==4){
				dig += exp[i];
				temp=0;
			}
			else{
				dd.push(dig);
				dd.push(expr1[i]);
				temp=0;
				dig='';
			}
			if (i==exp.length-1){
				dd.push(dig);
			}
		}
	}
	return dd;
}


function evaluate(exp)
{
	var s=['/','*','+','-'];
	// Base Case: Given expression is empty
	if (exp.length == 0) return -1;
	var digits=extract_digits(exp);
	// Traverse the remaining characters in pairs

	for (let j=0;j<s.length; j+=1)
	{
		for(let i = 1; i<exp.length; i += 2){
			if(exp[i]==s[j]){

				let opr = exp[i], opd1 = exp[i-1]; opd2=exp[i+1];
							// console.log("my="+opd1+" my2="+opd2+'sign'+opr);
				// if (isOperand(opd) == false) return -1;            

				if (opr == '+'){ 
					exp[i-1] = eval(opd1+""+opr+""+opd2);
				}
				else if (opr == '-') {exp[i-1]= opd1-opd2;}
				
				else if (opr == '*') {
					exp[i-1]= opd1*opd2;					
				}
				else if (opr == '/') {exp[i-1]= opd1/opd2;}
				
				else return -1;
				var change=0;
				for(let k=i;k<exp.length;k+=1){
					exp[k]=exp[k+2];
					change=1;
				}
				exp.pop();
				exp.pop();
				if(change==1){
					i=-1;
				}
							console.log(exp);
							// console.log("i=="+i)

			}
		}
	}
	return exp;
}

// Driver program to test above function
let expr1 = "7-22/2*3";

var digits=extract_digits(expr1);
console.log(digits);
let res = evaluate(digits);
console.log("ans="+res);