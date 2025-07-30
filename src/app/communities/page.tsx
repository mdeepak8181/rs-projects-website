import Communities from '@/components/Communities'
import { getCommunities } from '@/lib/getCommunities'

export default async function CommunitiesPage() {
  const communities = await getCommunities()

  return <Communities communities={communities} />
}
