# NextJS

## Why NextJS

1. File based Routing
2. Server-side Rendering(내장 페이지를 pre-rendering 한다)
3. Fullstack Capabilities

## File based Routing

NextJS에서는 Routing에 있어서 JSX나 JavaScript 코드를 사용하지 않음. pages foler의 구조를 통해
Next JS가 라우트 구조를 파악함.

/pages 하위에 index.js와 about.js가 있다면 my-domain/ 이 index, my-domin/about이 about 파일이 된다.
[id].js 로 만들면 동적인 값을 추가할 수 있다.

useRouter와 router.query.id 이런식으로 사용

catch-all routing을 하려면 파일이름을 [...date] 이런식으로 만드들면 /blog/2020/12 를 할 경우 router.query를 콘솔에 찍어보면 {date:["2020","12"]}로 출력이 된다.

Link를 import 해서 navigating해야 일반적인 a태그와 달리 state가 바뀌지 않는다. Link 컴포넌트는 마우스를 대자마자
date fetching을 하는 특이한 기능도 있다.

router.push => 폼을 제출하는 경우 사용
router.replace => 새 창으로 대체되는 개념이라 뒤로가기 불가능하게 만들 때 사용
