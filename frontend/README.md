# 디렉토리 구조의 중요성
https://app.leonardo.ai/image-generation
#리액트는 컴포넌트 기반으로 동작하기 때문에 디렉토리 구조의 컨벤션이 정말 중요하다고 생각한다. 이 구조가 무너지면 유지보수에 들어가는 공수는 점점 올라가고, 관리가 어려워지면서 개발 생산성도 떨어진다. 그래서 프로젝트 초기에 명확한 디렉토리 구조와 규칙을 세우는 게 핵심이라고 본다.
#리액트를 처음 접했을 때 느낀 어려움은, 디렉토리 구조를 어떻게 잡아야 하는지 감이 잘 안 왔다는 거다. FSD(Feature Slice Design), 모노리프(monorepo) 등 여러 디자인 패턴을 공부했지만, 결국 우리 시스템에 맞는 구조를 고민하면서 방향을 잡았다.
#내가 생각하는 디렉토리 구조의 핵심은 "책임과 역할의 분리"다. 컴포넌트, 상태 관리, 레이아웃, 유틸리티 등 각 요소들이 어디에 속해야 하고, 어떤 역할을 해야 하는지 명확히 정리해야 한다. 그렇지 않으면 코드베이스가 점점 복잡해지고 유지보수는 힘들어진다.
#우리 시스템은 메뉴 뎁스는 3단계까지 있고, B2B 특성상 다양한 사용자와 데이터 흐름을 관리해야 한다. 이런 특성을 고려해 디렉토리 구조를 설계했고, 초기 구조는 완벽하지 않더라도 함께 발전시켜 나갈 수 있으면 좋겠다.

#디렉토리 구조
```
/src                              # 프로젝트의 루트 디렉토리
 ├── layout                      # Header, Left, Bottom 등 재사용 가능한 레이아웃
 │   ├── Header.jsx               # 헤더 컴포넌트
 │   ├── Right.tsx                # 오른쪽 메뉴 컴포넌트
 │   ├── Bottom.tsx               # 하단 공통 컴포넌트
 │   ├── NotFound.tsx             # 404 화면
 │   ├── Error.jsx                # 500 화면
 │   └── LoginSignup.tsx          # 로그인 화면
 │   └── Layout.tsx               # Layout
 │   ```
 ├── pages                       # 모듈별 페이지 화면 (주요 라우팅 경로)
 │   ├── common/                      
 │   │   ├── CMEntry.jsx          # CM 모듈 Entry 화면
 │   │   └── CMList.jsx           # CM 모듈 List 화면
 │   └── order/                  
 │       ├── OrderEntry.jsx       # Order 모듈 Entry 화면
 │       └── OrderList.jsx        # Order 모듈 List 화면
 │   ```
 ├── components                  # 재사용 가능한 UI 컴포넌트 모음
 │   ├── ui/                     # Button, Modal 같은 기본 UI 요소
 │   │   ├── Button.jsx           # 버튼 컴포넌트
 │   │   ├── Modal.jsx            # 모달 컴포넌트
 │   │   └── Card.jsx             # 카드 컴포넌트
 │   └── form/                   # Form 요소 (ex. 검색 필드, 체크박스)
 │       ├── Search.jsx           # 검색 필드 컴포넌트
 │       └── CodeHelp.jsx         # 코드 도움말 컴포넌트
 │   ```
 ├── hooks                       # 상태 관리나 라이프사이클 관련 로직
 │   └── useAuth.jsx              # 인증 관련 커스텀 훅
 │   ```
 ├── store                       # 전역 상태 관리
 │   ├── authContext.jsx          # 인증 관련 전역 상태
 │   ├── menuContext.jsx          # 메뉴 관련 전역 상태
 │   └── tabContext.jsx           # 탭 관련 전역 상태
 │   ```
 ├── utils                       # 공통 유틸리티 함수: 순수 javascript (확장자로 구분)
 │   ├── dateUtils.js            # 날짜 관련 유틸 함수
 │   ├── stringUtils.js          # 문자열 처리 유틸 함수
 │   └── apiUtils.js             # API 호출 관련 유틸 함수
 │   ```
 ├── assets                      # 정적 파일 모음
 │   ├── images/                 # 이미지 파일들
 │   ├── styles/                 # 글로벌 CSS 및 SCSS 파일
 │   ├── icons/                  # 아이콘 파일들
 │   └── fonts/                  # 폰트 파일들
 │   ```
 ├── tests                       # test 
 ├── node_modules                # node liv
 ├── public                      # 정적 경로 favicon, robots 등
 ├── App.tsx                      # 애플리케이션의 엔트리포인트
 ├── index.tsx                    # ReactDOM.render()로 시작하는 루트 파일
 └── package.json                # npm 패키지 및 스크립트 설정 파일
```
## 규칙
1. **책임 분리**: 각 디렉토리는 명확한 책임을 가진다. 디렉토리 이름만 봐도 어떤 역할을 하는지 명확해야 한다.
2. **역방향 의존 금지**: 상위 디렉토리가 하위 디렉토리를 import할 수는 있지만, 반대로는 안 된다.
(App.tsx >  Layout > pages > components or hooks )  
3. **재사용성 고려**: components와 hooks는 재사용성을 최우선으로 설계한다.
4. **단일 책임 원칙**: 한 파일이 하나의 역할만 가지도록 한다.
5. **CSS와 jsx 분리**: 스타일 파일은 assets/styles에 관리하고, 컴포넌트와 분리한다.
