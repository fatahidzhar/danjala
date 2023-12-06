import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Template Danjala',
}

export default function TemplateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}