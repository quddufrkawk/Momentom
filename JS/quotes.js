const quotes=[
{
    quote:"고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
    author: "헬렌 켈러",
},
{
    quote:"평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author:"제임스 딘",
},
{
    quote:"자신을 내보여라. 그러면 재능이 드러날 것이다.",
    author: "발타사르 그라시안",
},
{
    quote:"한 번 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
},
{
    quote:"최고에 도달하려면 최저에서 시작하라.",
    author: "P.시루스",
},
{
    quote:"겨울이 오면 봄이 멀지 않으리.",
    author: "셸리",
},
{
    quote:"자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
    author: "오손 웰스",
},
{
    quote:"네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토벤",
},
{
    quote:"우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라.",
    author: "에픽토테스",
},
{
    quote:"돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다. ",
    author: "쇼펜하우어",
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;