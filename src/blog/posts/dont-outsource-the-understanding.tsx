import type { BlogPost } from '../types'

export const dontOutsourceTheUnderstanding: BlogPost = {
  slug: 'dont-outsource-the-understanding',
  title: "Don't outsource the understanding",
  description:
    'I owned the repository, but I no longer owned the understanding. A demo changed how I use coding agents to build Timekeep.',
  date: '2026-07-29',
  content: PostBody,
}

function PostBody() {
  return (
    <>
      <p>
        I built{' '}
        <a href="https://timekeep.ph" rel="noopener noreferrer">
          timekeep.ph
        </a>{' '}
        in Rails, then rewrote it in Next.js.
      </p>
      <p>
        I wanted a more modern interface. React with{' '}
        <a href="https://ui.shadcn.com" rel="noopener noreferrer">
          shadcn/ui
        </a>{' '}
        made that much easier than designing and building every component from
        scratch.
      </p>
      <p>
        The migration went well. Users kept their accounts. Photos and records
        moved. Nobody had to start over.
      </p>
      <p>What I got wrong was how I built afterward.</p>
      <p>
        I treated agents like a factory: describe the feature in a prompt, skim
        the code, read the test scenarios, let AI run the manual QA, review its
        report, and ship. I rarely sat with a change long enough to make the
        system my own.
      </p>
      <p>That caught up with me during a demo.</p>
      <p>
        Someone asked how leave flows into payroll. The case was not fully
        supported, and I could not explain the path with confidence. The tests
        were green. The interface looked fine. But I no longer had the system
        in my head.
      </p>
      <p>
        A line from a talk captured the problem: &ldquo;If you do not control
        the source code, you are not in control.&rdquo;
      </p>
      <p>I owned the repository. I just did not own the understanding.</p>
      <p>
        So v3 is Rails again, with{' '}
        <a href="https://inertiajs.com" rel="noopener noreferrer">
          Inertia
        </a>{' '}
        this time. I can keep the business domain in the framework I understand
        best while still using React and shadcn/ui for the interface.
      </p>
      <p>
        Inertia gives me both without making me maintain a separate frontend
        application or reopen every frontend decision from scratch.
      </p>
      <p>
        Rails does not prevent the problem I ran into. But I have been reading
        Ruby for 12 years. I can review and repair what agents produce without
        first translating the framework in my head.
      </p>
      <p>
        That matters for timekeeping and payroll. Pay logic is not something I
        am willing to merely skim.
      </p>
      <p>
        Agents still help a lot, especially with React, research, and generating
        options before I make a decision. The difference is that I no longer
        hand off the understanding with the implementation.
      </p>
      <p>
        Agents can write code I would not want to write by hand. They cannot
        carry the responsibility for me.
      </p>

      <h2>Bottom line</h2>
      <p>
        If a customer asks how something works, I need to explain the model,
        trace the path, and know where to look when it breaks.
      </p>
      <p>The code can be delegated. The understanding cannot.</p>
    </>
  )
}
