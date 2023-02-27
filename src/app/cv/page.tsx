import TimeBar from '../components/TimeBar/TimeBar'
import { IJob } from '../model/job'
import styles from './page.module.css'

export const metadata = {
  title: 'Giovanny Arias - Curriculum Vitae',
  description: 'Curriculum Vitae of Giovanny Arias',
}

async function getJobs() {
  // [const res = await fetch('http://127.0.0.1:3001/api/jobs')
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return res.json();]
}


const CV = async () => {

  // const jobs = await getJobs()
  const jobs: IJob[] = [];

  return (
    <div className={styles.container}>
      <TimeBar jobs={jobs}></TimeBar>
      Generating fancy text
So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?
Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with unicode; an industry standard which creates the specification for thousands of different symbols and characters. All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.
Unicode text
Amongst the hundreds of thousands of symbols which are in the unicode text specifications are certain characters which resemble, or are variations of the alphabet and other keyword symbols. For example, if we can take the phrase "thug life" and convert its characters into the fancy letters "𝖙𝖍𝖚𝖌 𝖑𝖎𝖋𝖊" which are a set of unicode symbols. These different sets of fancy text letters are scattered all throughout the unicode specification, and so to create a fancy text translator, it's just a matter of finding these sets of letters and symbols, and linking them to their normal alphabetical equivalents.
Unicode has a huge number of symbols, and so we're able to create other things like a wingdings translator too. Also if you're looking for messy text, or glitchy text, visit this creepy zalgo text generator (another translator on LingoJam).
Copy and paste
After generating your fancy text symbols, you can copy and paste the "fonts" to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text in agario is probably generated using a fancy text converter similar to this), to generate a creative-looking instagram, facebook, tumblr, or twitter post, for showing up n00bs on Steam, or just for sending messages full of beautiful text to your buddies.
The only exception is if your paste destination has a font which doesn't support some unicode characters. For example, you'll might find that some websites don't use a unicode font, or if they do, the font doesn't have all the characters required. In that case, you'll see a generic "box" in which was created when the browser tries to create a fancy letter. This doesn't mean there's an error with this translator, it just means the website's font doesn't support that character.
Mildly off topic, but you might also be interested in Facebook emojis - that's a massive searchable list of all the emojis that you can use in your Facebook posts and chat. And actually, I made an 🐌 Emoji Translator 🎲 which you might like.
If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've some found new beautiful fonts that can be copy-pasted and that aren't in this generator, please share them below as well. Thanks!
    </div>
  )
}

export default CV