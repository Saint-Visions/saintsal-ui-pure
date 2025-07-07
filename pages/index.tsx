// pages/index.tsx
import { BuilderPage } from "../ui/builder/BuilderPage"
import { getBuilderContent } from "../integration/builder/fetchContent"

export async function getStaticProps() {
  const content = await getBuilderContent("page", "/")
  return { props: { content }, revalidate: 60 }
}

export default function Home({ content }: { content: any }) {
  return <BuilderPage content={content} />
}

