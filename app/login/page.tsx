import HeroImage from '../core/ui/components/landing/hero_login'
import LoginForm from '../core/ui/components/landing/login_form'


export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
                <HeroImage />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Sign in or create an account</h2>
                    <LoginForm />
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>
                        {/* <SocialLogin /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}