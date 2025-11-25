import { doLogout } from '@/actions';

export default function Logout() {
  return (
    <form action={doLogout}>
      <button type='submit' className='btn btn-primary text-neutral w-full'>
        Logout
      </button>
    </form>
  );
}
