1 Performance - React it self take lot for performance enhancement but when it comes to invoking function or calling APIs again and again may cause a problem, here ucb,cm hooks comes in handy, using caching, in memory, local storage 
2 what are they and syntaxes - Two hooks, javascript functions , take input manages state and return something;

useCallback only executes when change in [], doing this it can stops executing unnecessary heavy fn for every render
// IT returns fn when [] changes.
useCallback(fn, []);

// It executes fn() and returns the value when [] changes.
useMemo(fn, []);

// It executes the fun however the task is it heavy, takes lot of time any problems
// It is side effect hook , change [] , executes without worrying about anything
useEffect(()=>{

}, [])

3 usages 
 - Referential Equality
    ex : == loosely equality
         === strictly equality
 - Expensive Execution
4 Examples
5 When NOT to use
