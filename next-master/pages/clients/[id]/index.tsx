import { useRouter } from "next/router";
function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "lagom", clientprojectid: "projectcolagom" },
    }); //replace를 쓸 시 뒤로가기 불가
  }
  return (
    <div>
      <h1>projects of a {router.query.id}</h1>
      <button onClick={loadProjectHandler}>load project</button>
    </div>
  );
}
export default ClientProjectsPage;
