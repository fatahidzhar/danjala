import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home Danjala',
}

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}