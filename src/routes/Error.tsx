import {useRouteError} from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <div>
      <p>예상하지 못한 오류가 발생했습니다</p>
      <p>
        <i>{error.data || error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;