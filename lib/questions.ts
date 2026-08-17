export interface Chapter {
  id: number;
  title: string;
  needs: string;
  situation: string;
  questions: [string, string, string];
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
      "갑자기 소고기 값이 많이 올랐어요. 불고기 피자 한 조각을 7,000원으로 올려야 해요. 지금 코드에서 어떻게 고치면 될까요?",
      "그렇게 바꾸면… 다른 피자 가격은 어떻게 되죠?",
      "마침 이번 달에 치즈 값은 싸졌어요. 치즈 피자는 2,800원으로 내리고 싶은데, 지금 코드로 가능한가요?",
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
      "손님이 페퍼로니 피자 먹고, 불고기 피자도 먹고 싶대요. 주문해볼게요.",
      "페퍼로니 주문하고 나니까 프로그램이 끝나버렸네요. 불고기 피자는 어떻게 추가하죠?",
      "피자 3종류를 주문하려면 프로그램을 3번 실행해야 하는 거예요? 실제 가게라면 어떨까요?",
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
      "페퍼로니 2개, 불고기 1개, 치즈 3개 주문했어요. 지금 코드로 전체 주문 목록을 한 번에 보여줄 수 있나요?",
      "pizza_order 변수에 지금 뭐가 들어있을까요? 세 가지 피자가 다 들어있나요?",
      "주문할 때마다 변수를 하나씩 새로 만들어야 할까요? 주문 개수를 미리 알 수 없다면요?",
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
      "음료 주문 방식을 바꾸고 싶어요. 코드에서 어디를 고쳐야 할까요?",
      "피자 주문 코드랑 음료 주문 코드가 거의 똑같이 생겼네요. 두 군데를 따로따로 고치다가 한 군데를 빠뜨리면 어떻게 될까요?",
      "똑같은 코드를 여러 번 쓰는 대신, 이름을 붙여서 필요할 때마다 불러 쓸 수 있다면 어떨까요?",
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
      "가게가 잘 돼서 치킨 메뉴도 추가하려고 해요. 피자 주문 함수를 그대로 치킨에도 쓸 수 있을까요?",
      "치킨용 함수를 새로 만들면, 피자 함수랑 거의 똑같이 생긴 함수가 두 세트가 되는 거죠. 파스타 메뉴까지 추가되면요?",
      "피자든 치킨이든 파스타든, 공통적으로 갖고 있는 게 뭐가 있을까요? 이걸 하나의 틀로 묶을 수 있다면 어떨까요?",
    ],
    summary:
      "공통된 데이터와 함수를 하나의 틀로 묶어두고 찍어서 쓰는 것, 그게 9장에서 배울 클래스예요. 붕어빵 틀이 클래스, 구워진 붕어빵 하나하나가 객체예요.",
    next: "9장 · 클래스 class",
  },
];

export function getChapterById(id: number): Chapter {
  return chapters.find((c) => c.id === id) ?? chapters[0];
}
