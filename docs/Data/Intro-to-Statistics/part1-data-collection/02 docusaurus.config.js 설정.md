---
sidebar_position: 1
---

# 시작하기
- [공식문서](https://docusaurus.io/)

## 데모페이지 확인
도큐사우루스의 공식 문서는 도큐사우루스로 작성되었으며, **플레이그라운드**([docusaurus.new](https://docusaurus.new))를 제공한다. 플레이그라운드에서 설치하지 않은 상태로 직접 확인할 수 있다.

## 직접 설치

### Node.js 설치하기
- [Node.js](https://nodejs.org/en/download/) 18.0 버전 이상 설치
  - 공식문서 설명상 모든 의존성 체크하여 설치를 권장한다.

### 새 홈페이지 생성하기
 클래식 템플릿을 사용하여 새 도큐사우루스 사이트를 만들어보자. Command Prompt나 파워쉘이나 터미널에서 아래 명령어를 입력하자. 공식문서는 npm으로 되어있길래 yarn 패키지 매니저를 사용해보았다.

```bash
yarn init docusaurus@latest my-website classic
```

- yarn init : yarn 패키지 매니저를 사용하여 새로운 Node.js 프로젝트를 초기화할 때 사용하는 명령어
  - 프로젝트 디렉토리에 `package.json` 파일 생성
    - Node.js 프로젝트의 핵심 구성 파일
    - 프로젝트 메타데이터 및 종속성(dependenceis) 정보 포함
- docusaurus@latest
  - 도큐사우루스 프로젝트 시작
    - @latest : 제일 최신 버전으로 시작
- my-website
  - 프로젝트 명 지정
  - 원하는 명칭으로 변경 가능
  - 현 디렉토리에서 설정된 프로젝트 명으로 폴더가 만들어지며 그 밑에 설치된다.
- classic
  - 템플릿 명 지정
  - 시작과 동시에 해당 템플릿을 설치해 준다
- 해당 커맨트 실행시 도큐사우루스에 필수적인 종속성들은 전부 설치된다.

### 홈페이지 시작하기
개발 서버를 실행시켜 보자.

```bash
cd my-website
yarn start
```
- `cd`(change directory) : `shell` 명령어로 하위 디렉토리로 이동한다.
- `yarn start` : yarn 패키지 매니저로 개발 서버를 실행시킨다.
  - 개발서버가 로컬에서 빌드된 블로그를 서브하여 보여준다
  - http://localhost:3000/ 에서 확인할 수 있다.
- `blog`나 `docs` 디렉토리 하위에 있는 문서를 임의로 편집해보자. 실시간으로 편집이 적용되는 모습을 확인할 수 있다. 





