//header와 footer가 없는 (회원가입 / 장바구니 / 상품구매) 등의 페이지에서 사용되는 wrapper이다.

interface pageProps {
  children: React.ReactNode;
}

const DetailPageWrapper = (props: pageProps) => {
  return <>{props.children}</>;
};

export default DetailPageWrapper;
