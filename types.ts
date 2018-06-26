var myString: string;
var myNum: number;
var myBool: boolean;
var myVar: any;

/* 
var strArr: string[];  //array of strings
var numArr: number[];  // of numbers
var boolArr: boolean[]; //of booleans 
*/

//another way of defining arrays
var strArr: Array<string>;
var numArr: Array<number>;
var boolArr: Array<boolean>;

var strNumTuple: [string, number];

var myVoid: void = undefined;
var myNull: null = null;
var myUndefined: undefined = null;


//assign values
myString = 'Hello world'.slice(0,3);
myNum = 22;
myBool = true;
myVar = 5;

strArr = ['Hello', 'World'];
numArr = [1,2,3];
boolArr = [true, false, true];

strNumTuple = ['Hello', 4];  // negali but atvirksciai, eiles tvarka taip pat svarbi

console.log(strNumTuple);
