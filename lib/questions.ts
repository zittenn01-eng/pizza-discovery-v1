export interface QuestionItem {
  text: string;
  // Optional multiple-choice options. When present, QuestionCard renders
  // selectable buttons instead of (or alongside) open-ended discussion,
  // since students are often reluctant to answer out loud.
  choices?: string[];
}

export interface Chapter {
  id: number;
  title: string;
  needs: string;
  situation: string;
  questions: [QuestionItem, QuestionItem, QuestionItem];
  summary: string;
  next: string;
}

export const chapters: Chapter[] = [
  {
    id: 2,
    title: "2장",
    needs: "if/elif",
    situation: "💻 화면에 2variable4.vercel.app 을 띄운 상태에서 진행하세요",
    questions: [
      {
        text: "갑자기 소고기 값이 많이 올랐어요. 불고기 피자 한 조각을 7,000원으로 올려야 해요. 지금 코드에서 어떻게 고치면 될까요?",
        choices: [
          "bulgogi_price 변수 값만 7000으로 바꾼다",
          "가격이 적힌 곳을 전부 찾아서 하나씩 바꾼다",
          "코드를 처음부터 다시 짠다",
          "잘 모르겠다",
        ],
      },
      {
        text: "그렇게 바꾸면… 다른 피자 가격은 어떻게 되죠?",
        choices: [
          "다른 피자 가격도 같이 바뀐다",
          "다른 피자 가격은 그대로다",
          "에러가 나서 실행이 안 된다",
        ],
      },
      {
        text: "마침 이번 달에 치즈 값은 싸졌어요. 치즈 피자는 2,800원으로 내리고 싶은데, 지금 코드로 가능한가요?",
        choices: [
          "네, 가능하다 (변수가 각각 따로 있으니까)",
          "아니요, 지금 구조로는 안 된다",
          "해봐야 알 것 같다",
        ],
      },
    ],
    summary:
      "피자마다 조건에 따라 다른 가격을 지정하려면 어떤 문법이 필요할지, 다음 시간에 바로 배워볼게요.",
    next: "3장 · 조건문 if/elif",
  },
  {
    id: 3,
    title: "3장",
    needs: "while",
    situation: "💻 화면에 ifstatement.vercel.app 을 띄운 상태에서 진행하세요",
    questions: [
      {
        text: "손님이 페퍼로니 피자 먹고, 불고기 피자도 먹고 싶대요. 주문해볼게요.",
        choices: [
          "두 개 다 순서대로 주문될 것 같다",
          "페퍼로니만 주문되고 끝날 것 같다",
          "실행하다가 에러가 날 것 같다",
          "직접 실행해봐야 알 것 같다",
        ],
      },
      {
        text: "페퍼로니 주문하고 나니까 프로그램이 끝나버렸네요. 불고기 피자는 어떻게 추가하죠?",
        choices: [
          "코드를 처음부터 다시 실행한다",
          "입력받는 코드를 한 번 더 추가한다",
          "같은 코드를 여러 번 복사해서 붙인다",
          "잘 모르겠다",
        ],
      },
      {
        text: "피자 3종류를 주문하려면 프로그램을 3번 실행해야 하는 거예요? 실제 가게라면 어떨까요?",
        choices: [
          "네, 매번 다시 실행해야 할 것 같다",
          "아니요, 실제 가게는 그렇게 안 할 것 같다",
          "계속 반복해서 실행하는 방법이 있을 것 같다",
        ],
      },
    ],
    summary:
      "주문이 끝날 때까지 계속 반복해서 입력받으려면 어떤 문법이 필요할지, 다음 시간에 바로 배워볼게요.",
    next: "4장 · 반복문 while / break / continue",
  },
  {
    id: 4,
    title: "4장",
    needs: "list/dict",
    situation:
      "💻 화면에 loopstatement.vercel.app 에서 여러 피자를 주문한 직후 진행하세요",
    questions: [
      {
        text: "페퍼로니 2개, 불고기 1개, 치즈 3개 주문했어요. 지금 코드로 전체 주문 목록을 한 번에 보여줄 수 있나요?",
        choices: [
          "네, 한 번에 보여줄 수 있다",
          "아니요, 지금 코드로는 안 된다",
          "일부만 보여줄 수 있다",
          "잘 모르겠다",
        ],
      },
      {
        text: "pizza_order 변수에 지금 뭐가 들어있을까요? 세 가지 피자가 다 들어있나요?",
        choices: [
          "세 가지 피자가 다 들어있다",
          "가장 마지막에 주문한 피자만 들어있다",
          "아무것도 안 들어있다",
        ],
      },
      {
        text: "주문할 때마다 변수를 하나씩 새로 만들어야 할까요? 주문 개수를 미리 알 수 없다면요?",
        choices: [
          "네, 매번 새 변수를 만들어야 한다",
          "아니요, 다른 방법이 있을 것 같다",
          "변수 개수를 미리 정해놓고 써야 한다",
        ],
      },
    ],
    summary:
      "개수가 정해지지 않은 항목들을 순서대로 쌓아서 저장하는 방법이 필요하죠. 다음 시간에 배울 리스트가 바로 그거예요.",
    next: "5장 · 리스트 & 딕셔너리",
  },
  {
    id: 5,
    title: "5장",
    needs: "def",
    situation:
      "💻 리스트·딕셔너리로 주문 목록을 관리하는 코드를 화면에 띄운 상태에서 진행하세요",
    questions: [
      {
        text: "음료 주문 방식을 바꾸고 싶어요. 코드에서 어디를 고쳐야 할까요?",
        choices: [
          "음료 관련 코드 한 부분만 고치면 된다",
          "음료 코드가 여러 곳에 흩어져 있어서 다 찾아 고쳐야 한다",
          "코드를 처음부터 다시 짜야 한다",
          "잘 모르겠다",
        ],
      },
      {
        text: "피자 주문 코드랑 음료 주문 코드가 거의 똑같이 생겼네요. 두 군데를 따로따로 고치다가 한 군데를 빠뜨리면 어떻게 될까요?",
        choices: [
          "둘 다 똑같이 동작해서 문제없다",
          "한쪽만 바뀌어서 코드끼리 서로 달라진다",
          "프로그램이 아예 실행되지 않는다",
        ],
      },
      {
        text: "똑같은 코드를 여러 번 쓰는 대신, 이름을 붙여서 필요할 때마다 불러 쓸 수 있다면 어떨까요?",
        choices: [
          "코드를 한 번만 고치면 되니까 편할 것 같다",
          "오히려 더 복잡해질 것 같다",
          "그런 게 가능한지 잘 모르겠다",
        ],
      },
    ],
    summary: "반복되는 코드에 이름을 붙여서 재사용하는 것, 그게 다음 시간에 배울 함수예요.",
    next: "6장 · 함수 def",
  },
  {
    id: 6,
    title: "6장",
    needs: "class",
    situation: "💻 함수로 정리된 피자 주문 코드를 화면에 띄운 상태에서 진행하세요",
    questions: [
      {
        text: "가게가 잘 돼서 치킨 메뉴도 추가하려고 해요. 피자 주문 함수를 그대로 치킨에도 쓸 수 있을까요?",
        choices: [
          "그대로 쓸 수 있다",
          "비슷하지만 새로 만들어야 할 것 같다",
          "전혀 다른 방식으로 짜야 한다",
          "잘 모르겠다",
        ],
      },
      {
        text: "치킨용 함수를 새로 만들면, 피자 함수랑 거의 똑같이 생긴 함수가 두 세트가 되는 거죠. 파스타 메뉴까지 추가되면요?",
        choices: [
          "세 세트, 네 세트로 계속 늘어난다",
          "하나로 합칠 수 있을 것 같다",
          "큰 문제는 없을 것 같다",
        ],
      },
      {
        text: "피자든 치킨이든 파스타든, 공통적으로 갖고 있는 게 뭐가 있을까요? 이걸 하나의 틀로 묶을 수 있다면 어떨까요?",
        choices: [
          "이름, 가격 같은 공통 정보가 있다",
          "공통점은 딱히 없는 것 같다",
          "묶을 수 있다면 코드가 더 간단해질 것 같다",
        ],
      },
    ],
    summary:
      "공통된 데이터와 함수를 하나의 틀로 묶어두고 찍어서 쓰는 것, 그게 9장에서 배울 클래스예요. 붕어빵 틀이 클래스, 구워진 붕어빵 하나하나가 객체예요.",
    next: "9장 · 클래스 class",
  },
];

export function getChapterById(id: number): Chapter {
  return chapters.find((c) => c.id === id) ?? chapters[0];
}
