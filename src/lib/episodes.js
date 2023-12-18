import { parse as parseFeed } from 'rss-to-json'
import { array, number, object, parse, string } from 'valibot'

export async function getAllEpisodes() {
  let FeedSchema = object({
    items: array(
      object({
        id: string(),
        title: string(),
        published: number(),
        description: string(),
        content: string(),
        enclosures: array(
          object({
            url: string(),
            type: string(),
          }),
        ),
      }),
    ),
  })

  let feed = await parseFeed('http://rss.castbox.fm/everest/b10ffeb604b44a29b28fceb603bd2908.xml')
  let items = parse(FeedSchema, feed).items

  let episodes = items.map(
    ({ id, title, description, content, enclosures, published }) => ({
      id,
      title,
      published: new Date(published),
      description,
      content,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }),
  )

  return episodes
}
