(this.webpackJsonpquizbee=this.webpackJsonpquizbee||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),r=n.n(o),s=n(3),u=n(4),l=n(6),c=n(5),h=[{id:0,question:"What is the Captial of India ?",option:["New Delhi","Mumbai","Kolkata","Dubai"],answer:"New Delhi"},{id:1,question:"How many digits are there in Mathematics ?",option:["Hundred","Thousand","Billion","Infinite"],answer:"Infinite"},{id:2,question:"Who is the first Prime Minister of India ?",option:["P.J. Abdul Kalaam","Jawaharlal Nehru","Indira Gandhi","Narendra Modi"],answer:"Jawaharlal Nehru"},{id:3,question:"Who is Mickey Mouse ?",option:["Actor","Scientist","Cartoon Character","Doctor"],answer:"Cartoon Character"},{id:4,question:"What is the position of Earth in our Solar System ?",option:["First","Second","Third","Fourth"],answer:"Third"},{id:5,question:'Who found the concept of "Gravitation" for the first time ?',option:["Albert Einstein","Charles Darwin","Issac Newton","V.Raman"],answer:"Issac Newton"},{id:6,question:"What are Constellations ?",option:["Group of Planets","Group of Galaxies","Group of Stars","Group of meteors"],answer:"Group of Stars"},{id:7,question:'Which planet is known as "The Blue Planet" ?',option:["Mercury","Earth","Venus","Uranus"],answer:"Earth"},{id:8,question:"What is the driver of a Train called ?",option:["Pilot","Train Driver","Locopilot","Captain"],answer:"Locopilot"},{id:9,question:"Who discovered Aeroplane ?",option:["Wright Brothers","Steve Waugh","Albert Einstein","Stephen Hawking"],answer:"Wright Brothers"}],d=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={userAnswer:null,currentQuestion:0,options:[],quizEnd:!1,score:0,disabled:!0},e.loadQuiz=function(){var t=e.state.currentQuestion;e.setState((function(){return{questions:h[t].question,options:h[t].option,answers:h[t].answer}}))},e.nextQuestionHandler=function(){var t=e.state,n=t.userAnswer,a=t.answers,i=t.score;e.setState({currentQuestion:e.state.currentQuestion+1}),console.log(e.state.currentQuestion),n===a&&e.setState({score:i+1})},e.checkAnswer=function(t){e.setState({userAnswer:t,disabled:!1})},e.finishHandler=function(){e.state.currentQuestion===h.length-1&&e.setState({quizEnd:!0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentQuestion;this.state.currentQuestion!==t.currentQuestion&&this.setState((function(){return{disabled:!0,questions:h[n].question,options:h[n].option,answers:h[n].answer}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.questions,a=t.options,o=t.currentQuestion;return t.quizEnd?i.a.createElement("div",null,i.a.createElement("h2",null,"Quiz Over "),i.a.createElement("h1",null,"Congratulations!"),i.a.createElement("p",null,"Final Score :",i.a.createElement("h2",null,this.state.score)," points"),i.a.createElement("h4",null,"The Correct Answers for the questions are :"),i.a.createElement("ul",null,h.map((function(e,t){return i.a.createElement("li",{className:"ui floating message options",key:t},e.answer)})))):i.a.createElement("div",{className:"App"},i.a.createElement("h3",null," ",n),i.a.createElement("span",null,"Questions ",o," out of ",h.length-1," "),a.map((function(t){return i.a.createElement("p",{key:t.id,className:"ui floating message options",onClick:function(){return e.checkAnswer(t)}},t)})),o<h.length-1&&i.a.createElement("button",{className:"ui inverted button",disabled:this.state.disabled,onClick:this.nextQuestionHandler},"Next"),o===h.length-1&&i.a.createElement("button",{className:"ui inverted button",disabled:this.state.disabled,onClick:this.finishHandler},"Finish"))}}]),n}(a.Component);n(12);function p(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null))}r.a.render(i.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.820df3ee.chunk.js.map