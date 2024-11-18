component > feature : 도메인/비즈니스 컴포넌트 포함
component > ui : ui 컴포넌트
component > provider : provider들의 집합

next app을 사용하는 버전이다보니 서버를 next api handler를 통한 todo api를 구성해서 작업을 해보았습니다.

### TDD

https://velog.io/@ire4564/Test-next.js-msw-jest%EB%A1%9C-TDD-%EC%8B%9C%EB%8F%84%ED%95%98%EA%B8%B0

테스트는 통합으로

1. 투두리스트 보여주기
2. 투두리스 저장
3. 투두 완료 및 삭제
4. 탭 전환

### 구현과정

1. svgr을 사용해 svg 파일 컴포넌트화
   webpack이 코드를 build할 때 svg 파일을 자동으로 리액트 컴포넌트화 해줍니다.
