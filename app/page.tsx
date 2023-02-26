import Link from "next/link"

export default function Page() {
    return (
        <div>
            <h1>Test</h1>
            <p>Test page</p>
            <Link href="/another_page">Go Here</Link>
        </div>
    );
}
