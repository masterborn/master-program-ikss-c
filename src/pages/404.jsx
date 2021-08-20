import Error404 from '@root/components/UI/404/error404';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center!important',
        alignItems: 'center!important',
      }}
    >
      <Error404 />
    </div>
  );
}
export default NotFound;
