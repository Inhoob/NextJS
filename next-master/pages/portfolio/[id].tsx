import { useRouter } from "next/router";
function PortfolioProjectPage() {
  const router = useRouter();
  //router.query.id 를 사용하면 현재 query에 접근할 수 있다.
  return (
    <div>
      <h1>portfolio page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
