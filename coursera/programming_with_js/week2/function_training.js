//Task1

function letterFinder(word, match)
{
    //var found_flag = false;
    for(var i=0; i<word.length; i++)
    {
        if(word[i] == match)
        {
            //found_flag = true;
            console.log("Found the ", match, " at ", i);
        }
        else{
            console.log("---No match found at ", i);
        }
        console.log(i, word[i]);
    }
    //if(found_flag)
    //{
    //    console.log("Found the ", match, "at", i);
    //}
    //else{
    //    console.log("---No match found at")
    //}
}

letterFinder("test", 't');