import SignUpForm from "../../../components/features/SignUp/sign_up_form"

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6 text-center">Sign up for a Real Estate account</h1>
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}