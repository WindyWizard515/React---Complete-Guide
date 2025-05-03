// Import data
import { CORE_CONCEPTS } from "./data.js"

// Import functions
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx"
import TabButton from "./components/TabButton.jsx"

// Import from react
import { useState } from "react"

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please select a tab")

  function handleSelect(button) {
    // button => 'components', 'jsx', 'props', or 'state'
    setSelectedTopic(button)
    console.log(selectedTopic)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept{...CORE_CONCEPTS[0]}/>
            <CoreConcept{...CORE_CONCEPTS[1]}/>
            <CoreConcept{...CORE_CONCEPTS[2]}/>
            <CoreConcept{...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;