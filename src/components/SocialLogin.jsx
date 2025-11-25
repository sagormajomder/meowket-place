import { doSocialLogin } from '@/actions';
import GoogleLoginButton from './GoogleLoginButton';

export default function SocialLogin() {
  return (
    <form action={doSocialLogin}>
      <GoogleLoginButton />
    </form>
  );
}
