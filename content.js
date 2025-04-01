const contentv1 = {
  "adventures": {
    "story": {
      "name": "Story",
      "default_save_name": "Story",
      "description": "Make a short story",
      "levels": {
        "1": {
          "story_text": "In level 1 you can make a story with a different main character that you enter yourself.\n\nIn the first line, use `{ask}` and ask who the main character of the story will be.\n\nAfter that first line, start with `{print}` if the sentence needs to be printed.\nYou use `{echo}` if you want your main character to be at the end of the sentence.\n",
          "example_code": "```\n{ask} The main character of this story is\n{print} The main character is now going to walk in the forest\n{echo} They're a bit scared,\n{print} They hear crazy noises everywhere\n{print} They're afraid this is a haunted forest\n```\n",
          "story_text_2": "### Exercise\nNow create your own story of at least 6 lines of code.\nThis story cannot be the same as the example code.\nUse at least one `{ask}` and one `{echo}` command.\nYou can make it about any topic you like.\nIf you can't think of a topic, use one of our choices: going to the movies, a sports match or a day at the zoo.\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "In level 2 you can make your story more fun. Your main character's name can now be anywhere in the sentence.\n\nYou do have to program a little bit extra for that. You must now name your main character first.\n\nYou can then put that name anywhere in a sentence.\n",
          "example_code": "```\nname {is} {ask} What is the name of the main character?\n{print} name is now going to run in the woods\n{print} name is a bit scared\n{print} Suddenly she hears a crazy noise...\n{sleep}\n{print} name is afraid this is a haunted forest\n```",
          "story_text_2": "### Exercise\nNow it's time to add variables to your own story that you've made in the previous level.\nGo to 'My programs', look for your level 1 story adventure and copy the code. Paste the code in your input screen in this level.\n\nThis code won't work in this level, because you have not used variables yet.\nChange the `{ask}` commands and `{echo}` commands in your code to the correct form that you've learned in this level.\n\n**Extra** Add a `{sleep}` command to your code to build up tension in your story.\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "3": {
          "story_text": "In level 3 you can make your story more fun. You can use randomness for any monster, animal or other obstacle, like this:\n",
          "example_code": "```\nanimals {is} 🦔, 🐿, 🦉, 🦇\n{print} They now hear the sound of an animals {at} {random}\n```\n",
          "story_text_2": "The command `{add}` can also come in handy in your story.\n",
          "example_code_2": "```\n{print} They hear a sound\nanimals {is} 🐿, 🦔, 🦇, 🦉\nanimal {is} {ask} What do you think it is?\n{add} animal {to_list} animals\n{print} it was an animals {at} {random}\n```\n",
          "story_text_3": "This is an example of the `{remove}` command in your story\n\n### Exercise\nCopy your story from the previous levels into this level.\nIn this level you've learned 3 new commands `{at} {random}` , `{add} {to_list}` and `{remove} {from}`.\nAdd new lines of code to your story, so that all of the new commands are featured at least once in your story.\n",
          "example_code_3": "```\n{print} His backpack got way too heavy.\n{print} Inside were a bottle of water, a flashlight and a brick.\nbag {is} water, flashlight, brick\ndump {is} {ask} Which item should he dump?\n{remove} dump {from} bag\n```\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "4": {
          "story_text": "### Exercise\nCopy the example code and finish it by adding quotation marks on the blanks in lines 1 and 2.\nThe blanks in line 3 and 4 should not be replaced by quotation marks, but a `{sleep}` and a `{clear}` command. Can you make it work?\n\n### Exercise 2\nGo back to the previous level and copy your story code. Make the code work in this level by adding quotation marks in the right spots.\nMind: The variables in your own story should be outside of the quotation marks. Just like the second line of the example code. In that line the variable name is placed outside of the quotation marks.\n",
          "example_code": "```\nname {is} {ask} _ What is your name? _\n{print}  _ The main character is called _ name\n_\n_\n{print} name  _ is now going to walk in the woods _\n{print} name _ is a bit scared _\nanimals {is} 🦔, 🐿, 🦉, 🦇\n{print} _ He hears the sound of a _ animals {at} {random}\n{print} name _ is afraid this is a haunted forest _\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder"
          ]
        },
        "5": {
          "story_text": "In this level you can program different endings, which will make your story even more fun.\nIn the example code you can see how to make 2 different endings.\n\n### Exercise 1\nWrite a new short story of at least 6 lines of code about a topic of your choosing.\nNo inspiration? Choose one of these topics: a superhero, a boring school day, stranded on a desert island.\n\nNow give the player a change to choose a happy or a bad end, just like in the example code.\nProgram both the endings.\n\n### Exercise 2\nCopy the story you've created in your own story adventure in the previous levels.\nFind a way to add at least 2 `{if}` and `{else}` commands to your story.\nThis can be with a happy or bad ending, but you can also try to find other ways to incoporate the commands.\n",
          "example_code": "```\nname {is} {ask} 'Who is walking in the forest?'\n{print} name ' walks through the forest'\n{print} name ' encounters a monster'\nend {is} {ask} 'Would you like a good or a bad ending?'\n{if} end {is} good {print} name ' takes the sword and the monster quickly runs away'\n{else} {print} 'The monster eats ' name\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate"
          ]
        },
        "7": {
          "story_text": "In a story, someone says words several times. For example, when someone calls for help or sings a song.\nYou can put such repetitions in your story, in this level with `{repeat}`.\n\n### Exercise\nAdd repetition to your own story. Go back to your saved programs, choose your story program from a previous level and\nfind a line containing `{print}` and repeat it!\n",
          "example_code": "```\n{print} 'The prince kept calling for help'\n{repeat} 5 {times} {print} 'Help!'\n{print} 'Why is nobody helping me?'\n```\n",
          "learning_goals": [
            "seqOrder",
            "repCommands"
          ]
        },
        "8": {
          "story_text": "In this level you can use multiple lines in your `{if}` commands, this way you can upgrade your happy or sad ending!\n\n### Exercise 1\nThe example code shows two different endings; one where the characters jump in a time machine and one where they do not.\nComplete the blanks with at least one sentence per ending.\n**Extra** Make the story longer. What happens in the story? You can also add a second `{ask}` with different options.\n\n### Exercise 2\nGo back to your saved programs, choose your story program from level 5. Now write a good and a bad ending of at least three lines long each!\n",
          "example_code": "```\n{print} 'OH NO! The T-rex is closing in!'\nend = {ask} 'Do you want a happy or a sad ending?'\n{if} end {is} happy\n    {print} 'Just in time Richard jumps back into the time machine!'\n    {print} _\n{else}\n    {print} 'Oh no! Richard is too slow...'\n    {print} _\n```\n",
          "learning_goals": [
            "seqOrder",
            "conBranches"
          ]
        },
        "9": {
          "story_text": "In this level you can use `{if}` and `{repeat}` commands inside other `{if}` and `{repeat}` commands. \nThis gives you many options and really helps you to make your story interactive.\n\n### Exercise 1\nFinish the code so the `{if}` works correctly.\n\n### Exercise 2\nAdd an `{if}` and `{else}` for the part of the story where Robin goes home too.\n\n### Exercise 3\nGo back to your level 8 story and use at least two `{if}`s inside another `{if}`.\n",
          "example_code": "```\n{print} 'Robin is walking downtown'\nlocation = {ask} 'Is Robin going into a shop, or does she go home?'\n{if} location {is} shop\n    {print} 'She enters the shop.'\n    {print} 'Robin sees an interesting looking book'\n    book = {ask} 'Does Robin buy the book?'\n    {if} book {is} yes\n    _ {print} 'Robin buys the book and goes home'\n    _ {else}\n    _ {print} 'Robin leaves the shop and goes home'\n{else}\n    {print} 'Robin goes home'\n```\n",
          "learning_goals": [
            "conBranches"
          ]
        },
        "10": {
          "story_text": "In this level you can use the {for} command in your story. In this way you could easily program the children's book 'Brown bear, Brown bear, what do you see'.\n\n### Exercise\n\nLook at <a href=\"https://www.yonkerspublicschools.org/cms/lib/NY01814060/Centricity/Domain/1621/Brown%20Bear%20Book.pdf\"> the story</a> if you do not know it, and make sure it is printed as in the book.\n",
          "example_code": "```\nanimals = _ , _ , _ \n{print} 'Brown bear, Brown bear'\n{print} 'What do you see?'\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "repVariable"
          ]
        },
        "13": {
          "story_text": "By using the `{and}` and `{or}` commands, you can make your stories more versatile. You can ask two questions and respond to the combination of answers.\n\n### Exercise 1\nLook at the example code and finish it. Then add at least 2 more `{if}` codes with `{and}` or `{or}`.\n\n### Exercise 2\nFind a story from a previous level, and add one `{and}` or `{or}`.\n",
          "example_code": "```\n{print} 'Our hero is walking through the forest'\n{print} 'The path splits two ways'\npath = {ask} 'Which path should she choose?'\nweapon = {ask} 'What weapon does she draw?'\n{if} path {is} 'left' {and} weapon {is} 'sword'\n    _\n```\n",
          "learning_goals": [
            "seqOrder",
            "conBranches",
            "conCombine",
            "decReused"
          ]
        },
        "15": {
          "story_text": "Using the `{while}` loop can make your stories more interesting. For example, you can use `{while} game == 'on'` so you can play until the game is over.\nOr you can use `{while} sword == 'lost'` so the player can't continue the game until they have found something.\n\n### Exercise\nThe example code shows you how to use the `{while}` loop in a story. Now **think of your own scenario** in which the player has to find something before they can continue.\n",
          "example_code": "```\nkeys = 'lost'\n{print} 'You are standing in your garden and you have lost your keys.'\n{print} 'Where do you want to look for them?'\n{print} 'You can choose: tree, flowerbed, rock, postbox'\n{while} keys == 'lost'\n    location = {ask} 'Where do you want to look?'\n    {if} location == 'flowerbed'\n        {print} 'Here they are!'\n        keys = 'found'\n    {else}\n        {print} 'Nope they are not at the ' location\n{print} 'Now you can enter the house!'\n```\n",
          "learning_goals": [
            "repCommands",
            "repVariable",
            "repCondition"
          ]
        },
        "18": {
          "story_text": "We are going to print another story, but now we have to use brackets with `{print}`.\n\n### Exercise 1\nCreate a story of at least 5 sentences. You don't have to use 'name' just yet.\n",
          "example_code": "```\n{print}('Welcome to this story!')\n```\n",
          "story_text_2": "### Exercise 2\nWe have already prepared an `{input}` for you. First, use the `name` variable in your story.\nThen add a second `{ask}` and use that variable as well.\nTip: Remember the commas in a `{print}` between text and variables!\n",
          "example_code_2": "```\nnaam = {input}(\"What's your name?\")\n{print}('Welcome to this story!')\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqOrder"
          ]
        }
      }
    },
    "add_remove_command": {
      "name": "{add} {to_list} & {remove} {from}",
      "default_save_name": "add_remove_command",
      "description": "introducing {add} {to_list} and {remove} {from}",
      "levels": {
        "3": {
          "story_text": "## Add to\nYou can add items to the list with the `{add} {to_list}` command. To add an item to a list you can simply type: `{add} penguin {to_list} animals` or you can use the `{ask}` command like in the example code.\n",
          "example_code": "```\nanimals {is} dog, cat, kangaroo\nlike {is} {ask} What is your favorite animal?\n{add} like {to_list} animals\n{print} I choose animals {at} {random}\n```\n",
          "story_text_2": "## Remove from\nIf you can add items to a list, of course you can also take them off. This is done with the `{remove} {from}` command.\n",
          "example_code_2": "```\nanimals {is} dog, cat, kangaroo\ndislike {is} {ask} What animal do you not like?\n{remove} dislike {from} animals\n{print} I choose animals {at} {random}\n```\n",
          "story_text_3": "### Exercise\nTry out the new commands in this virtual restaurant. Add the flavor the player is hoping for to the list and remove the flavors they are allergic to.\n",
          "example_code_3": "```\n{print} Mystery milkshake\nflavors {is} strawberry, chocolate, vanilla\nhope {is} {ask} What flavor are you hoping for?\n_\nallergies {is} {ask} Are you allergic to any flavors?\n_\n{print} You get a flavors {at} {random} milkshake\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        }
      }
    },
    "and_or_command": {
      "name": "{and} & {or}",
      "default_save_name": "and or",
      "description": "introducing {and} & {or}",
      "levels": {
        "13": {
          "story_text": "We are now going to learn `{and}` and `{or}`! If you want to check two statements, you don't have to use two `{if}`s but can use `{and}` and `{or}`.\n\nIf you use `{and}`, both statements, left and right of the `{and}` need to be true. We can also use `{or}`. Then only one statement needs to be correct.",
          "example_code": "```\nname = {ask} 'what is your name?'\nage = {ask} 'what is your age?'\n{if} name {is} 'Hedy' {and} age {is} 2\n    {print} 'You are the real Hedy!'\n```\n",
          "learning_goals": [
            "conCombine"
          ]
        }
      }
    },
    "ask_command": {
      "name": "{ask}",
      "default_save_name": "ask_command",
      "description": "Introduction {ask} command",
      "levels": {
        "1": {
          "story_text": "## The ask command\nNow that you can use the `{print}` command, you are ready to learn the next command: `{ask}`. With the `{ask}` command, you can ask a question. Check it out:\n",
          "example_code": "```\n{print} Hello!\n{ask} What is your name?\n```\n",
          "story_text_2": "## The `{echo}` command\nIf you want the computer to repeat the answer back to you, you can use the `{echo}` command. The answer will be echoed back at the end of the sentence, so in this example after hello.\n",
          "example_code_2": "```\n{print} Hello!\n{ask} What is your name?\n{echo} hello\n```\n",
          "story_text_3": "### Exercise\nTry out the `{ask}` and `{echo}` commands. Firstly, fill in the blanks to make this program work.\nThen ask 2 more questions using the `{ask}` command, after each `{ask}` use an `{echo}` to print the answer on the screen.\n",
          "example_code_3": "```\n_ How are you doing?\n_\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "## The ask command\nNow that we can use **variables** in our codes, we no longer need the `{echo}` command.\nWe can use variables to store the answers to our questions and this way we can use the answer to multiple questions in our codes.\nCheck it out:\n\nThis way your code is becoming interactive!\n",
          "example_code": "```\nname {is} {ask} What is your name?\n{print} Hello name\nage {is} {ask} How old are you?\n{print} name is age years old.\n```\n",
          "story_text_2": "### Exercise\nIn the previous adventure you have practised with setting variables with the `{is}` command.\nYou have created at least 3 variables and used them with a print command.\nNow, instead of setting the variables we want you to make the variables interactive, like we did in our example.\n\nCopy your code from the previous adventure and make the variables interactive by using `{ask}` commands.\n",
          "example_code_2": "```\nfavorite_animal {is} {ask} What is your favorite animal?\n{print} I like favorite_animal\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "18": {
          "story_text": "The final change we will need to make to get Python code is changing `{ask}` into `{input}`.",
          "example_code": "```\n{print}('My name is Hedy!')\nname = {input}('What is your name?')\n{print}('So your name is ', name)\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        }
      }
    },
    "blackjack": {
      "name": "Blackjack",
      "default_save_name": "Blackjack",
      "description": "Try to get as close to 21 as you can",
      "levels": {
        "17": {
          "story_text": "Blackjack is a simple game of cards in which you have to get as close to 21 points as possible. You get two cards. Each card is worth their numeral value, and the face cards (Jack, Queen and King) are worth 10 points.\nThe Ace is worth either 1 or 11 points (you can choose). The dealer, your opponent, also gets two cards.\nIf you want, you can get another card, and its points will be added to your total. The dealer can also choose to take another card.\nBut be careful not to get more than 21 points, because if you do, you lose!\nThe player who gets closest to 21, without going over it, wins!\n\n### Exercise\nIn this adventure we code the first part of our Blackjack game. We'll create a function to calculate how many points a card is worth.\n\n***Set the variables***\nStart by making a list of all the cards, from 2 to Ace. Next make a list of the face cards, so Jack, Queen and King. Then pick a random card from the list of cards to be card_1.\n\n***Create a function to calculate the points***\nCreate a function that calculates how many points a card is worth.\nAll the face cards are worth 10 points, the Ace is worth 11 and all the other cards are worth their numeral.\nReturn the variable `points` at the end of the function.\n\n***Test the function***\nTest if your function is working properly. Finish the first print command by filling in which card you've drawn. Then finish the second line by calling the function with card_1.\nRun the code a couple of times. Are you happy with the results? Great! Then you can remove the testing part and move on the the next adventure!\n",
          "example_code": "```\n{print} 'BLACKJACK'\n\n# Set these variables\ncards = _\nface_cards = _\ncard_1 =\n\n# Create a function to calculate the points\n{define} calculate_points {with} card:\n    {if} card {in} face_cards:\n        points = _\n    {elif} _\n        _\n    {else}:\n        _\n    _ points\n\n# Test your function\n{print} 'Your card is a ' _\n{print} 'That is worth ' _ ' points'.\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conEvaluate",
            "conBranches",
            "decSmaller"
          ]
        }
      }
    },
    "blackjack_2": {
      "name": "Blackjack 2",
      "default_save_name": "Blackjack_2",
      "description": "Blackjack part 2",
      "levels": {
        "17": {
          "story_text": "### Exercise\nIn this adventure we code the second part of our Blackjack game.\n\n***Paste your code from the previous adventure***\nIn the previous adventure you've started a list of variables and created a function to calculate how many points a card is worth. Copy your code and paste it here. Mind that you don't need the testing part, so if you haven't removed that yet, please do so now.\n\n***Add more variables***\nYou have already set the lists `cards` and `face_cards` and the variable `card_1`. Underneath those variables create 3 more variables: `card_2`, dealer_card_1` and `dealer_card_2`. These variables are all set to a random card from the list of cards.\n\n***Add up points***\nTo calculate how many points you have scored we call the function with card 1 and we do it again for card 2. Then we add both these scores together to get your total.\nDo the same thing for the dealers points, but be sure to use the dealer's cards and not your own!\n\n***2 Aces***\nYou're doing great! Almost all scores can be calculated now. There is only one exception: 2 Aces. If you get 2 Aces, your total is 12 points and not 22 (because 22 points would be losing!). This of course also goes for the dealer.\n\n***Show the score***\nLastly, you want to tell the program to tell you which cards you have drawn and how many points that is. Then show which cards the dealer has and how many points they have.\n\n***Continue in the next adventure***\nGreat! You have finished this part of the game! Copy your code and go to the next adventure to learn how to ask for an extra card and to declare a winner.\n",
          "example_code": "```\n# Paste your code from the previous adventure here\n\n# Add these variables to the list of variables\ncard_2 = _\ndealer_card_1 = _\ndealer_card_2 = _\n\n# Add up your points\nyour_points_1 = {call} _ {with} card_1\nyour_points_2 = _\nyour_total = _\n\n# Add up the dealers points\ndealer_points_1 = _\n_\n_\n\n# 2 Aces\n{if} card_1 == 'Ace' {and} _\n    your_total = 12\n{if} dealer_card_1 _\n    dealer_total = _\n\n# Show the score\n{print} 'You have drawn a ' _ ' and a ' _ '. That is ' _ ' points'\n{print} 'The dealer has drawn a ' _ ' and a ' _ '. That is ' _ ' points'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conBranches",
            "conCombine",
            "decReused"
          ]
        }
      }
    },
    "blackjack_3": {
      "name": "Blackjack 3",
      "default_save_name": "Blackjack_3",
      "description": "Blackjack part 3",
      "levels": {
        "17": {
          "story_text": "In the previous adventures you have learned how to draw 2 random cards for yourself and for the dealer and to calculate how many points you both got.\nIn this adventure we add the option to ask for an extra card for both you and the dealer.\n\n### Exercise\n***Paste your code from the previous adventure*** Firstly, copy your code from the previous adventure and paste it here.\n\n***Extra card for you*** If you want, you can get an extra card to get your total as close to 21 as possible. First ask the player if they want an extra card.\nIf they do, pick a random card and print what they have drawn. If the card is not an Ace, you can call the function and add the points to your total.\nIn case the card is an Ace, you can't use the function, because the Ace can be either 1 point or 11 points, depending on how many points you already have earned.\nIf your total is less than 11, you want the ace to be 11 points (because this is closest to 21). So you add 11 points to your total.\nIf the total is more than or equal to 11, you want the ace to be 1 point (because you don't want more than 21 points). So you add 1 point to your total.\nLastly, print your new total of points.\n\n***Extra card for the dealer*** The dealer can also get an extra card. The dealer doesn't need to be asked, because they always get an extra card if their total is less than 17.\nCopy the 'Extra card for you code' and paste it in the dealers section. Then change it to fit the dealer picking an extra card and getting points added to their total.\n",
          "example_code": "```\n# Paste your code from the previous adventure here\n\n# Extra card for you\nhit = {ask} _\n{if} hit == 'yes':\n    card_3 = _\n    {print} _\n    {if} card_3 _ 'Ace':\n        your_points_3 = _\n        your_total = _\n    {else}:\n       {if} your_total _\n            _\n        {else}:\n            _\n    {print} _\n\n# Extra card for the dealer\n{if} dealer_total < 17\n_\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conBranches"
          ]
        }
      }
    },
    "blackjack_4": {
      "name": "Blackjack 4",
      "default_save_name": "Blackjack_4",
      "description": "Blackjack part 4",
      "levels": {
        "17": {
          "story_text": "In the last 3 adventures you have almost created a working blackjack game! The only thing left to do is to decide a winner!\n\n### Exercise\n***Paste your code from the previous adventure*** Start by pasting the code that you've made so far into your programming field.\n\n***Decide a winner***\nFirstly, if you and the dealer have an equal amount of points, it's a draw.\nSecondly, if the dealer has more than 21 points and you don't, you are the winner.\nThirdly, if both you and the dealer have less than 22 points, we have to see who came closest to 21. We do that by comparing who has the highest score. Is your total higher than the dealer's total, then you are the winner. If not, the dealer wins.\nLastly, in all other scenarios (e.g. you have more than 21 points and the dealer doesn't, or you both have more than 21 points) you are the loser.\n\n***Enjoy the game!***\nDoes your game work properly? Amazing! You have done a great job! Enjoy your game!\nIf it doesn't work right away, no worries, you might have made a mistake. Just keep calm and bebug your code using the ladybug button.\n",
          "example_code": "```\n# Paste your code from the previous adventure here\n\n# Decide a winner\n{if} _\n    {print} 'Its a draw! Play again!'\n{elif} _\n    {print} 'You win!'\n{elif} _ :\n    {if} _:\n        {print} _\n    {else}:\n        {print} _\n{else}:\n    _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conBranches",
            "conCombine"
          ]
        }
      }
    },
    "calculator": {
      "name": "Calculator",
      "default_save_name": "Calculator",
      "description": "Create a calculator",
      "levels": {
        "6": {
          "story_text": "Now that you can do maths, you can make a calculator yourself!\n",
          "example_code": "```\nnumber_1 = {ask} 'Fill in the first number:'\nnumber_2 = {ask} 'Fill in the second number:'\ncorrect_answer = number_1 * number_2\n{print} number_1 ' times ' number_2 ' is ' correct_answer\n```\n",
          "story_text_2": "### Exercise\nThe calculator above will calculate the answer for you, but you can also make a program to test your own maths skills, like this:\nFill in the blanks to make it complete!\n",
          "example_code_2": "```\ncorrect_answer = 11 * 27\nanswer = {ask} 'How much is 11 times 27?'\n{if} answer {is} _ {print} 'good job!'\n{else} {print} 'Wrong! It was ' _\n```\n",
          "story_text_3": "**Extra** You can also let the computer do random products on its own using `{random}`.\n",
          "example_code_3": "```\nnumbers = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\nnumber_1 = _\nnumber_2 = _\ncorrect_answer = number_1 * number_2\ngiven_answer = {ask} 'What is ' number_1 ' times ' number_2 '?'\n{if} _\n{else} _\n```",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "conEvaluate"
          ]
        },
        "9": {
          "story_text": "In a previous level, you've created a calculator. In this level, you can expand that code so it asks multiple questions.\n\n### Exercise 1\nCan you finish line 10 to get the code to work?\n\n### Exercise 2\nGive the player feedback when they enter an answer, like `{print} 'Correct!'` or `{print} 'Wrong! The correct answer is ' correct_answer`.\n",
          "example_code": "```\nscore = 0\n{repeat} 10 {times}\n    numbers = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\n    number_1 = numbers {at} {random}\n    number_2 = numbers {at} {random}\n    correct_answer = number_1 * number_2\n    {print} 'What is ' number_1 ' times ' number_2 '?'\n    answer = {ask} 'Type your answer here...'\n    {print} 'Your answer is ' answer\n    {if} _ {is} _\n        score = score + 1\n{print} 'Great job! Your score is... ' score ' out of 10!'\n```\n",
          "learning_goals": [
            "repCommands",
            "conBranches"
          ]
        },
        "10": {
          "story_text": "This calculator game helps you practise your tables of multiplication!\n### Exercise\nFill in the blanks. We want this program to ask the player these questions:\n```\nHow much is 1 times 1?\nHow much is 1 times 2?\nHow much is 1 times 3?\nHow much is 2 times 1?\nHow much is 2 times 2?\nHow much is 2 times 3?\nHow much is 3 times 1?\nHow much is 3 times 2?\nHow much is 3 times 3?\n_\n```\n",
          "example_code": "```\nnumbers = 1, 2, 3\n{for} _\n    {for} _\n        answer = {ask} _\n        correct = number_1 * number_2\n        {if} answer {is} correct\n            {print} 'Great job!'\n        {else}\n            {print} 'That is wrong. The right answer is ' correct\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands",
            "repVariable",
            "repNested"
          ]
        },
        "11": {
          "story_text": "With a `{for}` you can simplify tables of multiplication practise program.\n\n### Exercise 1\nImprove the example code such that it prints a nice multiplication table: <br> \"1 times 10 is 10\", \"2 times 10 is 20\", etc.\n\n### Exercise 2\nGo back to your level 10 multiplication code, and modify it so that it uses a `{for}` and `{range}`.\n",
          "example_code": "```\nnumber = 10\n{for} i {in} {range} 1 {to} 10\n    {print} i * number\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands"
          ]
        },
        "12": {
          "story_text": "In this level, you can make a calculator that works for decimal numbers.\n\n### Exercise 1\nFill out the blanks to complete the calculator. Remember to use a period and not a comma for decimal numbers.\n\n### Exercise 2\nCreate a new mathematics practice program, but now use decimal numbers.\nCreate a list of numbers, choose two to multiple and let the player answer.\nAnd of course you have to validate the answer! **Extra** Increase the difficulty by adding lives: A player loses a life for a wrong answer and after three wrong answers the game ends.\n",
          "example_code": "```\nnumber1 = {ask} 'What is the first number?'\nnumber2 = {ask} 'What is the second number?'\nanswer = _\n{print} number1 ' plus ' number2 ' is ' _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands",
            "conEvaluate",
            "conBranches"
          ]
        },
        "13": {
          "story_text": "### Exercise 1\nLet's make the practice program a bit harder. The player now has to answers two questions correctly. Fill out the blanks to complete the program.\n\n### Exercise 2\nSometimes, calculations have multiple correct answers. For example, 10 can be divided by 5 and by 2. So the question 'What number divides 10?' can be answered by 2 and by 5.\nAsk for a calculation that has multiple correct answers, ask the player to answer it, and determine if it is correct using `{or}`.\nEmpty the programming field and create your own solution.\n",
          "example_code": "```\nanswer1 = {ask} 'What is 10 times 7?'\nanswer2 = {ask} 'What is 6 times 7?'\n{if} _ _ _ _ _ _ _\n    {print} _\n```\n",
          "learning_goals": [
            "conCombine"
          ]
        },
        "14": {
          "story_text": "In this adventure you will build a calculator that calculates your mean grade for you. If you get your calculator to work, you can move on to the next adventure, which allows you to add two extra features.\n\n### Exercise 1\nFill in the blanks to get the calculator to work.\n* Start with the fourth line, add a question to figure out what grade the student got.\n* In the fifth line you'll want to calculate the total of all grades, so the total = total + grade.\n* Then we get to set the return value. We want to return the mean, so the total devided by the amount of tests (4).\n* Lastly we finish the code by calling the function in line 8.\n\nDid you get it? Awesome! Would you like to add even more to your calculator? **This adventure continues in the next adventure!**\n",
          "example_code": "```\n{define} calculate_mean_grade\n    total = 0\n    {for} i {in} {range} 1 {to} 4\n        grade = {ask} _\n        total = total + _\n        {return} _ / 4\n\nmean_grade = {call} _\n{print} 'Your mean grade is ' mean_grade\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands",
            "conEvaluate",
            "conBranches",
            "decSmaller"
          ]
        },
        "15": {
          "story_text": "You can add the `{while}` loop to the calculator game you've learned to make in a previous level.\nThis makes sure the player can't continue to the next question if they answer incorrectly.\n\n### Exercise\nAdd the `{while}` loop in the function, ask the player what number_1 times number_2 is and print their answer.\nThen `{call}` the function.\n",
          "example_code": "```\n{define} new_question\n    numbers = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\n    number_1 = numbers {at} {random}\n    number_2 = numbers {at} {random}\n    correct = number_1 * number_2\n    answer = 0\n    _\n    _\n    _\n    {print} 'Well done!'\n\n{print} 'Give 10 correct answers to win!'\n{for} i {in} {range} 1 {to} 10\n    _\n{print} 'You win!'\n```\n",
          "learning_goals": [
            "seqModify",
            "repVariable",
            "repCondition",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "calculator_2": {
      "name": "Calculator 2",
      "default_save_name": "Calculator 2",
      "description": "Calculator 2",
      "levels": {
        "14": {
          "story_text": "### Exercise 2\n**This is the second part of this adventure.** The adventure starts in the previous adventure.\nOf course, you don't always want to calculate the mean of 4 tests. You might want to calculate the mean of 10 tests or only 2...\nWe can fix this problem by adding the argument and variable 'amount_of_tests'.\n* Start a new line on line 3. Set the amount_of_tests argument by asking the student how many tests they have made.\n* Change the 4 in line 4 to the new argument amount_of_tests.\n* Lastly, change the 4 in line 6 to amount_of_tests\n\nTry out your new program. Does it work?\n\n### Exercise 3\nDid you want to make your program even better? Great! In the previous program you could only calculate the mean grade of 1 subject, but it would be better if you could calculate the mean grade for all subjects you want!\nWe won't tell you how to do it, but we will give you one tip: Start your code in line 1 with: define calculate_mean_grade with subject.\n",
          "example_code": "```\n# Use your own code from the previous adventure.\n```\n",
          "learning_goals": [
            "seqModify",
            "repVariable",
            "conEvaluate",
            "conBranches",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "clear_command": {
      "name": "{clear}",
      "default_save_name": "clear_command",
      "description": "{clear} command",
      "levels": {
        "4": {
          "story_text": "Time for a new command! With `{clear}` you can clear all the text from your output screen. This way you can prevent your screen getting too full of text.\nBeware! If you are using a `{clear}` command, you might need to use a `{sleep}` above it. Otherwise Hedy will clear your screen without giving you the time to read as you can see in the example!\n",
          "example_code": "```\n{print} '3'\n{clear}\n{print} '2'\n{clear}\n{print} '1'\n{clear}\n{print} 'wait for it...'\n{sleep} 3\n{clear}\n{print} 'SURPRISE!'\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        }
      }
    },
    "debugging": {
      "name": "debugging",
      "default_save_name": "debugging",
      "description": "debugging adventure",
      "levels": {
        "1": {
          "story_text": "Welcome to a debugging adventure. Debugging a code means getting rid of mistakes in the code.\nThat means that in these debugging adventures, we will show you code that does not work yet.\nYou will have to figure out what's wrong and correct the mistakes.\n\n### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{print} I love programming\nDo you love programming too?\n{echo}\n{print} What are your hobbies?\n{echo} Your hobbies are\n```\n",
          "learning_goals": [
            "seqInstructions",
            "debOutcome",
            "debIntermediate"
          ]
        },
        "2": {
          "story_text": "Welcome to a debugging adventure. Debugging a code means getting rid of mistakes in the code.\nThat means that in these debugging adventures, we will give you a code that does not work yet.\nYou will have to figure out what's wrong and correct the mistakes.\n\n### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\ndestination {ask} Where are you going on holidays?\n{print} The flight to dstination leaves at 3 pm.\n{ask} Did you check in your luggage yet?\n{echo}\n{print} Let me print your boarding pass for you.\n{sleep}\nHere you go! Have a nice trip!\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "debOutcome",
            "debIntermediate"
          ]
        },
        "3": {
          "story_text": "Welcome to a debugging adventure. Debugging a code means getting rid of mistakes in the code.\nThat means that in these debugging adventures, we will give you a code that does not work yet.\nYou will have to figure out what's wrong and correct the mistakes.\n\n### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\nmovie_choices {is} dracula, fast and furious, home alone, barbie\nchosen_movie {is} movies {at} {random}\n{print} Tonight we will watch chosen _movies\nlike {ask} Do you like that movie?\n{print} Tomorrow we will watch something else.\n{add} chosen_movie {to_list} movie_choices\n{print} Tomorrow we will watch tomorrows_movie\ntomorrows_movie {is} movie_choices {at} {random}\nI'll go get the popcorn! {print}\n```\n",
          "learning_goals": [
            "debOutcome",
            "debIntermediate"
          ]
        },
        "4": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{print} 'Welcome to the online library!\n{ask} What genre of books do you like?\n{print} You like genre\nauthor {is} {ask} 'Who's your favorite author?'\n{print} 'author is your favorite author'\n{print} Hmmm... i think you should try... books {at} {random}\n```\n",
          "learning_goals": [
            "debOutcome",
            "debIntermediate"
          ]
        },
        "5": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{print} Welcome to Swimming Pool Hedy!\nclass {is} {ask} 'Are you here to join a class today?'\n{if} class yes\n{print} 'Great! You're joining a class!\n{print} {else} 'You will not be joining a class'\ndiscount {is} 'Do you have a discount code?'\n{if} discount {is} yes\ndiscount_answer {is} {ask} 'What's your discount code?'\ndiscount_codes = Senior4231, Student8786, NewMember6709\n{if} discount_answer {is} {in} discount_cods\n{print} 'That will be $3,50'\n'That will be $5,50'\n{print} 'Have a nice swim!'\n```\n",
          "learning_goals": [
            "conEvaluate",
            "debIntermediate"
          ]
        },
        "6": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{print} 'Vending machine'\nchosen_product = {ask} 'Please select a product'\n1_dollar_products = coke orange juice water\n2_dollar_products = chocolate, cookie, museli bar\n3dollar_prodcuts = potato chips, beef jerky, banana bread\n{if} chosen {is} {in} 1_dollar_products\nprice = 1\n{if} chosen_product {is} 2_dollar_products\nprice = 2\n{else} chosen_product {in} 3_dollar_products\nprice = 3\namount_of_products = '{ask} How many of ' chosen_product would you like to have?'\ntotal = price + amount_of_product\n{print} 'That will be $' price 'please'\n```\n",
          "learning_goals": [
            "conEvaluate",
            "debIntermediate"
          ]
        },
        "7": {
          "story_text": "### Exercise\nSurprise! This program looks more like an output than a code. And yet, we don't want you to just add `{print}` commands in front of each line.\nFix this program to turn it into the nursery rhyme 'Brother John (Frère Jacques)' by using the {repeat} command of course!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\nAre you sleeping?\nBrother John!\nMorning bells are ringing!\nDing, dang, dong!\n```\n",
          "learning_goals": [
            "seqOrder",
            "repCommands"
          ]
        },
        "8": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{print} 'Welcome to Manicures and Pedicures by Hedy'\nbodypart = {ask} 'Are you getting your fingernails or toenails done today? Or both?'\n{if} bodyparts {is} both\n        {print} That will be $25'\n        price = 25\n    {else}\n        {print} That will be $18'\n        price = 18\ncolor = {ask} What color would you like?\nsparkles = {ask} 'Would you like some sparkles with that?'\n{if} sparkles {is} yes\n    {print} 'We charge $3 extra for that'\nprice = price + 3\n{else} {print} 'No sparkles' {print} 'So no extra charge'\n{sleep} 5\n{print} 'All done! That will be $' price ' please!'\n{print} 'Thank you! Byebye!'\n```",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "conEvaluate",
            "conBranches",
            "debIntermediate"
          ]
        },
        "9": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{print} 'Welcome to our sandwich shop'\namount 'How many sandwiches would you like to buy?'\n{repeat} amount {times}\n{ask} {is} {ask} 'What kind or bread would you like your sandwich to be?'\ntypes_of_bread {is} white, wheat, rye, garlic, gluten free\n{if} chosen_bread in types_of_bread\n{print} 'Lovely!'\n{else}\n'I'm sorry we don't sell that'\ntopping {is} {ask} 'What kind of topping would you like?'\nsauce {is} {ask} 'What kind of sauce would you like?'\n{print} One chosen_bread with topping and sauce.\nprice = amount * 6\n{print} 'That will be 'price dollar' please'\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate",
            "conBranches",
            "debIntermediate"
          ]
        },
        "10": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\nnames = Muad Hasan Samira Noura\nactivities = fly a kite, go swimming, go hiking, catch tan in the sun\n{for} name {is} names\n{print} At the beach name loves to activity {at} {random}\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands",
            "debIntermediate"
          ]
        },
        "11": {
          "story_text": "### Exercise\nDebug this calendar program. The output of this program is supposed to look like a list of dates.\nFor example:\n\n```\nHedy calendar\nHere are all the days of November\nNovember 1\nNovember 2\nNovember 3\n```\nAnd so on.\n\nMind that you have to test your code extra carefully for the month February, because the amount of days in this month changes in leap years.",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{print} 'Hedy calendar'\nmonths_with_31 days = January, March, May, July, September, October, December\nmonths_with_30_days = April, June, August, November\nmonth = {ask} 'Which month would you like to see?'\n{if} month {in} months_with_31_days\n    days = 31\n    {if} month {in} months_with30_days\n        days = 30\n{if} month = February\n    leap_years = 2020, 2024, 2028, 2036, 2040, 2044, 2028\n    year = {ask} 'What year is it?'\n{if} year {in} leap_years\n    days = 29\n{else}\n    days = 28\n\n{print} 'Here are all the days of ' moth\n{for} i {in} {range} 1 {to} days\n    {print} month i\n```\n",
          "learning_goals": [
            "seqInstructions",
            "debOutcome"
          ]
        },
        "12": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{define} greet\ngreetings = 'Hello', 'Hi there', 'Goodevening'\n    {print} greetings {at} {random}\n\n{define} take_order\n    food = {ask} 'What would you like to eat?'\n    {print} 'One food'\n    drink = 'What would you like to drink?'\n    {print} 'One ' drink\n    more = {ask} 'Would you like anything else?'\n        {if} more {is} 'no'\n    {print} 'Alright'\n        {else}\n        {print} 'And ' more\n{print} 'Thank you'\n\n{print} 'Welcome to our restaurant'\npeople = {ask} 'How many people are in your party tonight?'\n{for} i {in} {range} 0 {to} people\n    {call} greet_costumer\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqModify",
            "repCommands",
            "conEvaluate",
            "debIntermediate"
          ]
        },
        "13": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{define}movie_recommendation {with} name\n    action_movies == 'Die Hard', 'Fast and Furious', 'Inglorious Bastards'\n    romance_movies = 'Love Actually', 'The Notebook', 'Titanic'\n    comedy_movies = 'Mr Bean' 'Barbie''Deadpool'\n    kids_movies = 'Minions', 'Paddington', 'Encanto'\n    {if} name {is} 'Camila' {or} name {is} 'Manuel'\n        recommended_movie = kids_movie {at} {random}\n    {if} name {is} 'Pedro' {or} 'Gabriella'\n            mood = {ask} 'What you in the mood for?'\n        {if} mood {is} 'action'\n            recommended_movie = comedy_movies {at} {random}\n        {if} mood {is} 'romance'\n            recommended_movie = romance_movies\n    {if} mood {is} 'comedy'\n            recommended_movie = comedy_movies {at} {random}\n\n{print} 'I would recommend ' recommended_movie ' for ' name\n\nname = {ask} 'Who is watching?'\nrecommendation = {ask} 'Would you like a recommendation?'\n{if} recommendaion {is} 'yes'\n{print} movie_recommendation {with} name\n{else}\n{print} 'No problem!'\n```\n",
          "learning_goals": [
            "conBranches",
            "conCombine",
            "decSmaller",
            "debIntermediate"
          ]
        },
        "14": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{define} calculate_heartbeat\n    {print} 'Press your fingertips gently against the side of your neck'\n    {print} '(just under your jawline)'\n    {print} 'Count the number of beats you feel for 15 seconds'\n    beats == {ask} 'How many beats do you feel in 15 seconds?'\n    heartbeat = beats*4\n    {print} 'Your heartbeat is ' heartbeat\n    {if} heartbeat >= 60 {or} heartbeat <= 100\n        {print} 'Your heartbeat seems fine'\n    {else}\n        {if} heartbeat > 60\n            {print} 'Your heartbeat seems to be too low'\n        {if} heartbeat < 100\n            {print} 'Your heartbeat seems to be too high'\n        {print} 'You might want to contact a medical professional'\n\nmeasure_heartbeat = {ask} 'Would you like to measure your heartbeat?'\n{if} measure_heartbeat = 'yes'\n    {call} measure_heartbeat\n{else}\n    'no problem'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conBranches",
            "decSmaller",
            "debIntermediate"
          ]
        },
        "15": {
          "story_text": "### Exercise\nDebug this random children's story. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\nnames = 'Tanya', 'Romy', 'Kayla', 'Aldrin', 'Ali'\nverbs='walking', 'skipping', 'cycling', 'driving', 'running'\nlocations = 'on a mountaintop', 'in the supermarket', 'to the swimming pool'\nhiding_spots = 'behind a tree', under a table', in a box'\nsounds = 'a trumpet', 'a car crash', 'thunder'\ncauses_of_noise = 'a television', 'a kid with firecrackers', 'a magic elephant', 'a dream'\n\nchosen_ name = names {at} {random}\nchosen_verb = verbs {at} {random}\nchosen_location = 'locations {at} {random}'\nchosen_sounds = noises {at} {random}\nchosen_spot = hiding_spots {random}\nchosen_causes = causes_of_noise {at} {random}\n\n{print} chosen_name ' was ' chosen_verb ' ' chosen_location\n{print} 'when they suddenly heard a sound like ' sounds {at} {random}\n{print} chosen_name ' looked around, but they couldn't discover where the noise came from'\n{print} chosen_name ' hid ' chosen_spot'\n{print} 'They tried to look around, but couldn't see anything from there'\nhidden = 'yes'\n{while} hidden = 'yes'\n    {print} chosen_name 'still didn't see anything'\nanswer = {ask} 'does ' chosen_name ' move from their hiding spot?'\n    {if} answer = 'yes'\n        hidden == 'no'\n{print} 'chosen_name moved from' chosen_spot\n{print} 'And then they saw it was just' chosen_cause\n{print} chosen_name 'laughed and went on with their day'\n{print} The End\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repVariable",
            "repCondition",
            "conBranches",
            "debIntermediate"
          ]
        },
        "16": {
          "story_text": "### Exercise\nDebug this code. Good luck!\nTip: Make sure that you only see your score once in the end.",
          "example_code": "**Warning! This code needs to be debugged!**\n```\ncountry = ['The Netherlands', 'Poland', 'Turkey', 'Zimbabwe', 'Thailand', 'Brasil', 'Peru', 'Australia', 'India', 'Romania' ]\ncapitals = 'Amsterdam', 'Warshaw' 'Istanbul', 'Harare', 'Bangkok', 'Brasilia', 'Lima', 'Canberra', 'New Delhi', 'Bucharest'\nscore = 0\n{for} i {in} {range} 0 {to} 10\n    answer = {ask} 'What's the capital of ' countries[i]\n    correct = capital[i]\n    {if} answer = correct\n        {print} 'Correct!'\n    score = score + 1\n    {else}\n        {print} 'Wrong,' capitals[i] 'in the capital of' countries[i]\n    {print} 'You scored ' score ' out of 10'\n\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqModify",
            "repCommands",
            "conEvaluate",
            "conBranches",
            "debIntermediate"
          ]
        },
        "17": {
          "story_text": "### Exercise\nDebug this code. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\n{define} food_order\n    toppings = {ask} 'pepperoni, tuna, veggie or cheese?'\n    size = {ask} 'big, medium or small?'\n    number_of_pizza = {ask} 'How many these pizzas would you like?'\n\n    {print} 'YOU ORDERED'\n    {print} number_of_pizzas ' size  ' topping ' pizza'\n\n{define} drinks_order\n    drink = {ask} 'water, coke, icetea, lemonade or coffee?'\n    number_of_drinks = {ask} 'How many of these drinks would you like?'\n\n    {print} 'YOU ORDERED'\n    {print} number_of_drinks ' ' drink\n\n'Welcome to Hedy pizza'\nmore_food = {ask} 'Would you like to order a pizza?'\n{while} more_food = 'yes'\n    {return} food_order\n    more_food = {ask} 'Would you like to order a pizza?'\nmore_drinks = {ask} 'Would you like to order some drinks?'\n{while} more_drinks == 'yes'\n    {call} drink_order\n    more_drinks == {ask} 'Would you like to order more drinks?'\n\n\n{print} 'Thanks for ordering!'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repVariable",
            "repCondition",
            "decSmaller",
            "debIntermediate"
          ]
        },
        "18": {
          "story_text": "### Exercise\nDebug this Old MacDonald program from level 16. Good luck!",
          "example_code": "**Warning! This code needs to be debugged!**\n```\nanimals = ['pig', 'dog', 'cow']\nsounds = ['oink', 'woof', 'moo']\n{for} i {in} {range} 1 {to} 3\n    animal = animals[i]\n    sound = sounds[i]\n    {print} 'Old MacDonald had a farm'\n    {print} 'E I E I O!'\n    {print} 'and on that farm he had a ' animal\n    {print} 'E I E I O!'\n    {print} 'with a ' sound sound ' here'\n    {print} 'and a ' sound sound ' there'\n    {print} 'here a ' sound\n    {print} 'there a ' sound\n    {print} 'everywhere a ' sound sound\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands",
            "debIntermediate"
          ]
        }
      }
    },
    "default": {
      "name": "Introduction",
      "default_save_name": "intro",
      "description": "Level explanation",
      "levels": {
        "1": {
          "story_text": "Welcome to Hedy! Here you can learn how to program step by step.\n\nTry the code yourself! The yellow button copies the example code to your programming field.\nThen push the green 'Run code' button under the programming field to run the code.\n\nReady? Then go to the next adventure to learn how to make your own codes!\n",
          "example_code": "```\n{print} Hello world!\n```\n"
        },
        "2": {
          "story_text": "Congratulations! You've reached level 2. Hopefully you've already made some awesome codes!\nIn the first level you might've notice that the `{echo}` command can only save one bit of information at a time.\nFor example in the restaurant adventure, you could echo what the costumer wanted to eat, or what they wanted to drink, but not both in one sentence.\n\nThat changes in level 2. In level 2 you'll learn to work with variables, that allow you to save multiple pieces of information and print them in any place you want.\nSo let's go to the next adventure!\n",
          "example_code": "**Warning! This code does not work!**\nIn Hedy commands will change sometimes. `{echo}` for example only works in level 1. In this level you'll learn a better way to echo answers back.\n```\n{print} Welcome at Hedy's\n{ask} What would you like to eat?\n{echo} So you want\n{ask} what would you like to drink?\n{echo} So you want\n```\n"
        },
        "3": {
          "story_text": "In the previous level you've learned what a variable is and how you can use it to make your adventures more interactive.\nBut... that's not the only thing you can do with variables! You can also use variables to make lists.\nAnd you can even let Hedy pick a random word out of a list, which allows you to make real games!\nTake a quick look at the next adventure!\n"
        },
        "4": {
          "story_text": "In the previous levels you've been practising with variables, but you may have come across this problem.\nYou might have tried to run a code like this:\n\nOf course you wanted to print\n\n`My name is Sophie`\n\nbut Hedy prints\n\n`My Sophie is Sophie`.\n\nIn this level this problem is fixed by using quotation marks.\n",
          "example_code": "```\nname {is} Sophie\n{print} My name is name\n```\n"
        },
        "5": {
          "story_text": "In the previous levels you've already learned to use `{at} {random}` which made your games different every time you ran the code.\nBut it's not really interactive, the player doesn't have any influence on what happens in the game.\n\nIn this level you'll learn the `{if}` command, that allows you to give different responses in your program. This way you can program a secret password for your computer for example.\nSo let's go to next adventure for the new command!\n",
          "example_code": "```\npassword {is} {ask} 'What is the correct password?'\n```\n"
        },
        "6": {
          "story_text": "In the previous level you have practiced with `{ask}` and `{if}`. For example you can ask guests what they would like to eat.\nWhat you can't yet do though, is calculate the price for everyone's dinner.\n\nThis level makes it possible to use addition, subtraction and multiplication in your programs. This way you can calculate the prices in your restaurant, but you could also add a secret code to give your friends and family a discount.\nAnother option in this level is programming your own maths game, for your little brother or sister to practice their multiplications.\nGo see for yourself!\n",
          "example_code": "```\nfood_price {is} 0\ndrink_price {is} 0\ntotal_price {is} 0\n{print} 'Welcome to McHedy'\norder {is} {ask} 'What would you like to eat?'\n{if} order {is} hamburger food_price {is} 5\n{if} order {is} fries food_price {is} 2\ndrink {is} {ask} 'What would you like to drink?'\n{if} drink {is} water drink_price {is} 0\n{else} drink_price {is} 3\ntotal_price {is} food_price + drink_price\n{print} 'That will be ' total_price ' dollars, please'\n```\n"
        },
        "7": {
          "story_text": "Great job! You've reached the next level, which means you have practiced with `{if}` and `{else}`. You have probably noticed that your codes are getting longer and longer.\nFor example if you want to program 'Happy Birthday'.\n\nThat's a lot of code for mainly the same words over and over again. Luckily in the next adventure you'll learn a solution with the `{repeat}` command, that allows you to repeat a line of code multiple times.\n",
          "example_code": "```\n{print} 'happy birthday to you'\n{print} 'happy birthday to you'\n{print} 'happy birthday dear Hedy'\n{print} 'happy birthday to you'\n```\n"
        },
        "8": {
          "story_text": "Now you've learned how to repeat one single line of code. This comes in handy, but it's not always enough. Sometimes you want to repeat multiple lines at once.\nThis level allows you to group a couple of lines of code, and repeat that little group of lines all at once!\n",
          "example_code": "```\n{repeat} 5 {times} {print} 'In the next adventure you can repeat multiple lines of code at once!'\n```\n"
        },
        "9": {
          "story_text": "Great job! You've reached another new level! In the previous level you've learned to use multiple lines of code in an {if} or {repeat} command. But you can't yet combine the two...\nGood news! In this level you will be allowed to put an {if} inside an {if}, or inside a {repeat} command. Putting a block of code inside another block of code is called nesting.                     ``` Putting a block of code inside another block of code is called nesting.\n",
          "example_code": "```\nanswer = {ask} 'Are you ready to learn something new?'\n{if} answer {is} yes\n    {print} 'Great! You can learn to use the repeat command in the if command!'\n    {print} 'Hooray!'\n    {print} 'Hooray!'\n    {print} 'Hooray!'\n{else}\n    {print} 'Maybe you should practice some more in the previous level'\n"
        },
        "10": {
          "story_text": "You're doing great! In the previous levels we still faced a small problem. You have learned to repeat lines, but what if you'd want to slightly change the line.\nFor example if you want to sing the song 'if you're happy and you know it'. It would look like this:\n\nIf you'd also want the next verse 'stomp your feet', and the next one, and the next one, you'd have to change the code completely.\nIn this level you'll learn the `{for}` command, which allows you to make a list of actions and repeat the code with another action each time!\nPlease take a look!\n",
          "example_code": "```\n{repeat} 2 {times}\n    {print} 'if youre happy and you know it clap your hands'\n{print} 'if youre happy and you know it and you really want to show it'\n{print} 'if youre happy and you know it clap your hands'\n```\n"
        },
        "11": {
          "story_text": "You have reached level 11, you're doing great! In the higher levels, Hedy is focussing more and more on teaching you the programming language Python.\nIn Python there is no `{repeat}` command, but there is a command that works like {repeat}. Are you curious to find out how to say `{repeat}` in Python language? Quickly go on to find out!\n"
        },
        "12": {
          "story_text": "Maybe you have tried using decimal numbers in your restaurant adventure. If you did, you probably noticed that Hedy didn't understand them yet and always rounded off.\nFrom this level on you can use decimal numbers.\n",
          "example_code": "```\nburger = 5\ndrink = 2\ntotal = burger + drink\nprint 'You have ordered a burger and a drink'\nprint 'That costs ' total ' dollars please'\n```\n"
        },
        "13": {
          "story_text": "In the previous levels you've learned how to put two `{if}`commands inside each other. This works fine, but it does give you very long and unhandy codes like this one:\n\nIn this system you have to give both the correct username and the correct password.\nIn this level you will learn the `{and}` command that will make this code a lot shorter and more understandable!\nCheck it out!\n",
          "example_code": "```\nusername = {ask} 'What is your username?'\npassword = {ask} 'What is your password?'\n{if} username {is} 'Hedy'\n    {if} password {is} 'secret'\n        {print} 'Welcome Hedy!'\n    {else}\n        {print} 'Access denied'\n{else}\n    {print} 'Access denied!'\n```\n"
        },
        "14": {
          "story_text": "With the example code you can calculate if you've passed a subject at school (so, a grade of six or higher).\nYou can see this code is extremely inefficient, due to the very long code in line 5.\nAll the different grades from 1 to 5 had to be programmed separately. Lucky for you, in this level you'll learn how to do this without this extremely long code!\n",
          "example_code": "```\nfirst_grade = {ask} 'What score did you get on your first test?'\nsecond_grade = {ask} 'What score did you get on your second test?'\nadded = first_grade + second_grade\nmean_grade = added / 2\n{if} mean_grade = 1 {or} mean_grade = 2 {or} mean_grade = 3 {or} mean_grade = 4 {or} mean_grade = 5\n    {print} 'Oh no! You have failed the subject...'\n{else}\n    {print} 'Great! You have passed the subject!'\n```\n"
        },
        "15": {
          "story_text": "In this game below a code has been made to make sure the player can play on as long as they want...\nBut the code is ineffective and way too long. Also, what if the player wants to play 101 games instead of 100?\nYou can't play to infinity?\nIn this level you will learn a command that makes all of this a lot easier!\n",
          "example_code": "```\ngame = 'on'\n{for} i {in} {range} 1 {to} 100\n    {if} game == 'on'\n        answer = {ask} 'Do you want to continue?'\n        {if} answer == 'no'\n            game = 'over'\n        {if} answer == 'yes'\n            {print} 'Ok we will continue'\n```\n"
        },
        "16": {
          "story_text": "In this level we will grow a bit more towards real Python code. You will also learn how to match two lists together.\nThis way you can program a code in which the correct animal is matched to the right sound.\nBecause the two codes below... Are obviously nonsense!\n",
          "example_code": "```\nanimals = 'chicken', 'horse', 'cow'\nsounds = 'cluck', 'neigh', 'moo'\n{for} animal {in} animals\n    {print} 'A ' animal ' says ' sounds {at} {random}\n```\nYou could also try to make it work this way, but....\n```\nanimals = 'chicken', 'horse', 'cow'\nsounds = 'cluck', 'neigh', 'moo'\n{for} animal {in} animals\n    {for} sound {in} sounds\n        {print} 'A ' animal ' says ' sound\n```\nNote: These codes will not work like this in this level. Head to the next adventure to see which parts you need to correct."
        },
        "17": {
          "story_text": "Now we are going to change indentation a little bit. Every time that we need an indentation, we need `:` at the line before the indentation.\n\nIn this level you can also use a new command: `{elif}`. `{elif}` is short for ``{else} {if}`` and you need it when you want to make 3 (or more!) options.\nCheck it out!\n"
        },
        "18": {
          "story_text": "Congratulations! You have reached the last level of Hedy! The code you have created here can be copied to real Python environments like replit or PyCharm, and you can continue learning there!\nNote however that Python can only read English commands, so if you have been using other languages, you will need to switch to English now.\n"
        }
      }
    },
    "dice": {
      "name": "Dice",
      "default_save_name": "Dice",
      "description": "Make your own dice",
      "levels": {
        "3": {
          "story_text": "In this level we can choose from a list. With that we can let the computer choose one side of the die.\nTake a look at the games you have in your closet at home.\nAre there games with a (special) die? You can also copy it with this code.\nFor example, the dice of the game Earthworms with the numbers 1 to 5 and an earthworm on it.\n\n![Die of earthworms with 1 to 5 and an earthworm on it](https://cdn.jsdelivr.net/gh/felienne/hedy@24f19e9ac16c981517e7243120bc714912407eb5/coursedata/img/dobbelsteen.jpeg)\n",
          "example_code": "```\nchoices {is} 1, 2, 3, 4, 5, earthworm\n{print} You threw _ {at} {random} !\n```\n",
          "story_text_2": "### Exercise\nThe dice in the example above are dice for a specific game. Can you make normal dice?\nOr other special dice from a different game?\n",
          "example_code_2": "```\nchoices {is} _\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "4": {
          "story_text": "In this level you can also create dice. But this time you can try it yourself, without an example code!\n\n### Exercise\nMake your own dice in this level.\nTip: If you have no idea how to make dice. Take a peek at your dice from the previous level, but don't forget to add quotation marks.\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder"
          ]
        },
        "5": {
          "story_text": "We are going to add the `{if}` and `{else}` commands to our dice!\n\n### Exercise\nComplete the sample code so that the code says \"You can stop throwing\" once you have thrown an earthworm. It should say \"You have to throw again\" if you've thrown anything else.\n**Extra** Maybe you want to recreate a die from a completely different game. That's fine too! Then make up your own reaction, e.g. 'yes' for 6 and 'pity' for something else.\n",
          "example_code": "```\nchoices {is} 1, 2, 3, 4, 5, earthworm\nthrow {is} choices {at} {random}\n{print} 'you have thrown ' throw\n_ throw {is} earthworm {print} 'You can stop throwing.'\n_ {print} 'You have to throw it again!'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        },
        "6": {
          "story_text": "You can also make an Earthworm die again in this, but now you can also calculate how many points have been rolled.\nYou may know that the worm counts 5 points for Earthworms. Now after a roll you can immediately calculate how many points you have thrown.\nThis is the code to calculate points for one die:\n\n### Exercise\nCan you make the code so that you get the total score for 8 dice? To do that, you have to copy and paste some lines of the code.\n",
          "example_code": "```\nchoices = 1, 2, 3, 4, 5, earthworm\npoints = 0\nthrow = choices {at} {random}\n{print} 'you threw ' throw\n{if} throw {is} earthworm points = points + 5 {else} points = points + throw\n{print} 'those are ' points ' points'\n```\n",
          "example_code_2": "Did you manage to calculate the score for 8 dice? That required a lot of copy and pasting, right? We are going to make that easier in level 7!\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "7": {
          "story_text": "You can also make a dice again in this level. With the `{repeat}` code you can easily roll a whole hand of dice.\n\n### Exercise\nTry to finish the sample code!  **Extra** Think of a game you know that involves a dice and program that using a `{repeat}`.\n",
          "example_code": "```\nchoices = 1, 2, 3, 4, 5, 6\n_ _ _ _ _ _ _\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "repCommands"
          ]
        },
        "10": {
          "story_text": "### Exercise\nIs everybody taking too long throwing the dice? In this level you can let Hedy throw all the dice at once!\nChange the names into names of your friends or family, and finish the code.\n",
          "example_code": "```\nplayers = Ann, John, Jesse\nchoices = 1, 2, 3, 4, 5, 6\n_ _ _ _\n    {print} player ' throws ' choices {at} {random}\n    {sleep}\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands",
            "repVariable"
          ]
        },
        "15": {
          "story_text": "### Exercise\nIn this level you can create a little game in which you'll have to throw 6 as fast as possible.\nWe have started the code, it's up to you to get the game to work!\n\nFirstly, add a `{while}` loop that checks if 6 has been thrown or not.\nAs long as you haven't thrown 6 already, throw the dice on a random number.\nPrint what the player has thrown.\nAdd a try to the amount of tries\nWait a second before you throw again, or - in case you've thrown a 6 - before the game ends.\n",
          "example_code": "```\noptions = 1, 2, 3, 4, 5, 6\n{print} 'Throw 6 as fast as you can!'\nthrown = 0\ntries = 0\n_\n_\n_\n_\n_\n{print} 'Yes! You have thrown 6 in ' tries ' tries.'\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "repVariable",
            "repCondition",
            "conEvaluate"
          ]
        }
      }
    },
    "dishes": {
      "name": "Dishes?",
      "default_save_name": "Dishes",
      "description": "Use the computer to see who does the dishes",
      "levels": {
        "3": {
          "story_text": "Do you always disagree at home about who should wash the dishes or change the litter box today?\nThen you can let the computer choose very fairly. You can program that in this level!\n",
          "example_code": "```\npeople {is} mom, dad, Emma, Sophie\n{print} people {at} {random} has to do the dishes\n```\n",
          "story_text_2": "### Exercise\nMake your own version of the dishwasher program. Firstly make a list of your family members.\nThen think of a task that needs to be done, and let the computer decide who has to do the task with the `{at} {random}` command.\n\n**Extra** Don't feel like doing the dishes yourself? Hack the program by removing your name from the list with the `{remove}` `{from}` command.\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "4": {
          "story_text": "With quotation marks you can make your dishwashing program even better.\n\n### Exercise\nFirst, fill in right symbols or commands on the blanks to make this example program work.\nDid you get it? Great! Now copy your own code from the previous level and make it work in this level by adding quotation marks in the right spots.\n",
          "example_code": "```\npeople {is} mom, dad, Emma, Sophie\n{print} _ the dishes are done by _\n{sleep}\n{print} people {at} _\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "5": {
          "story_text": "With the `{if}` you can now have more fun with choice in the program. You can have your program respond to the choice that the computer has made.\n### Exercise\nCan you finish the code so that it prints 'too bad' when it is your turn and otherwise 'yes!'?\nDon't forget the quotes!\n",
          "example_code": "```\npeople {is} mom, dad, Emma, Sophie\ndishwasher {is} people {at} {random}\n_ dishwasher {is} Sophie {print} _ too bad I have to do the dishes _\n_ {print} 'luckily no dishes because ' _ ' is already washing up'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        },
        "6": {
          "story_text": "How often is everyone going to do the dishes? Is that fair? You can count it in this level.\n",
          "example_code": "```\npeople = mom, dad, Emma, Sophie\nemma_washes = 0\ndishwasher = people {at} {random}\n{print} 'The dishwasher is' dishwasher\n{if} dishwasher {is} Emma emma_washes = emma_washes + 1\n{print} 'Emma will do the dishes this week' emma_washes 'times'\n```\n\nNow you can copy lines 3 to 5 a few times (e.g. 7 times for a whole week) to calculate for a whole week again.\nDo you make the code for the whole week?\n",
          "story_text_2": "If you are extremely unlucky the previous program might choose you to do the dishes for the whole week! That's not fair!\nTo create a fairer system you can use the `{remove}` command to remove the chosen person from the list. This way you don't have to do the dishes again until everybody has had a turn.\n\nMonday and Tuesday are ready for you! Can you add the rest of the week?\nAnd… can you come up with a solution for when your list is empty?\n",
          "example_code_2": "```\npeople = mom, dad, Emma, Sophie\ndishwasher = people {at} {random}\n{print} 'Monday the dishes are done by: ' dishwasher\n{remove} dishwasher {from} people\ndishwasher = people {at} {random}\n{print} 'Tuesday the dishes are done by: ' dishwasher\n{remove} dishwasher {from} people\n```\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "7": {
          "story_text": "With the `{repeat}` you can repeat pieces of code. You can use this to calculate who will be washing dishes for multiple days!\n### Exercise\nUse the `{repeat}` command to decide on who needs to wash the dishes for an entire week. Each blank needs to be filled with one command or number!\n**Extra** Can you think of other tasks in the house? Adapt the code so it decides on three household chores. Do not forget to print what tasks it concerns!\n",
          "example_code": "```\npeople = mom, dad, Emma, Sophie\n{repeat} _ _ {print} 'Dishwashing will be done by ' _ _ _\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "repCommands"
          ]
        },
        "10": {
          "story_text": "In this level you can make a schedule for the whole week in an easy way!\n\n### Exercise\nAdd a second chore, such as vacuuming or tidying up, and make sure it is also divided for the whole week.\n<br> **Extra** The program is not fair, you can be unlucky and wash up all week. How could you make the program more fair?\n",
          "example_code": "```\ndays = Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\nnames = mom, dad, Emma, Sophie\n{for} day {in} days\n    {print} names {at} {random} ' does the dishes on ' day\n```\n",
          "learning_goals": [
            "repCommands",
            "repVariable"
          ]
        }
      }
    },
    "elif_command": {
      "name": "{elif}",
      "default_save_name": "elif",
      "description": "{elif}",
      "levels": {
        "17": {
          "story_text": "In this level you can also use a new command: `{elif}`. `{elif}` is a combination of the keywords `{else}` and `{if}` and you need it when you want to make 3 (or more!) options.\nCheck it out!\n",
          "example_code": "```\nprizes = ['1 million dollars', 'an apple pie', 'nothing']\nyour_prize = prizes[{random}]\n{print} 'You win ' your_prize\n{if} your_prize == '1 million dollars' :\n    {print} 'Yeah! You are rich!'\n{elif} your_prize == 'an apple pie' :\n    {print} 'Lovely, an apple pie!'\n{else}:\n    {print} 'Better luck next time..'\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        }
      }
    },
    "for_command": {
      "name": "{for}",
      "default_save_name": "for",
      "description": "{for} command",
      "levels": {
        "10": {
          "story_text": "## For\nIn this level we learn a new code called `{for}`. With `{for}` you can make a list and use all elements.\n`{for}` creates a block, like `{repeat}` and `{if}` so all lines in the block need to start with 4 spaces.",
          "example_code": "```\nanimals = dog, cat, blobfish\n{for} animal {in} animals\n    {print} 'I love ' animal\n```\n",
          "story_text_2": "### Exercise\nFinish this code by adding `{for} action {in} actions` to line 2.\n",
          "example_code_2": "```\nactions = clap your hands, stomp your feet, shout Hurray!\n_\n    {repeat} 2 {times}\n        {print} 'If youre happy and you know it, ' action\n        {sleep} 2\n    {print} 'If youre happy and you know it, and you really want to show it'\n    {print} 'If youre happy and you know it, ' action\n    {sleep} 3\n```\n",
          "learning_goals": [
            "repCommands",
            "repVariable"
          ]
        },
        "11": {
          "story_text": "In this level, we add a new form of the `{for}`. In earlier levels, we used `{for}` with a list, but we can also use `{for}` with numbers.\nWe do that by adding a variable name, followed by  `{in}` `{range}`. We then write the number to start at, `{to}` and the number to end at.\n\nTry the example to see what happens! In this level again, you will need to use indentations in lines below the `{for}` statements.",
          "example_code": "```\n{for} counter {in} {range} 1 {to} 10\n    {print} counter\n{print} 'Ready or not. Here I come!'\n```\n",
          "learning_goals": [
            "repCommands"
          ]
        },
        "17": {
          "story_text": "Now we are going to change indentation a little bit. Every time that we need an indentation, we need `:` at the line before the indentation.\n",
          "example_code": "```\n{for} i {in} {range} 1 {to} 10:\n    {print} i\n{print} 'Ready or not, here I come!'\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "18": {
          "story_text": "Lastly, we'll turn `{for} i {in} {range} 1 {to} 5` into real Python code, like this:\n",
          "example_code": "```\n{for} i {in} {range}(1,5):\n    {print} (i)\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands"
          ]
        }
      }
    },
    "fortune": {
      "name": "Fortune teller",
      "default_save_name": "Fortune Teller",
      "description": "Let Hedy predict the future",
      "levels": {
        "1": {
          "story_text": "Have you ever been to a carnival and had your future predicted by a fortune teller? Or have you ever played with a magic eight ball?\nThen you probably know that they can't really predict your future, but it's still fun to play!\n\nIn the upcoming levels you can learn how to create your own fortune telling machine!\nIn level 1 you can start off easy by letting Hedy introduce herself as a fortune teller and let her `{echo}` the players' answers.\nLike this:\n",
          "example_code": "```\n_ Hello, I'm Hedy the fortune teller!\n_ Who are you?\n_ Let me take a look in my crystal ball\n_ I see... I see...\n_ Your name is\n```\n",
          "story_text_2": "### Exercise\nCopy the example code into your input screen and fill in the blanks to make the code work.\n**Extra** Change the code and let the fortune teller not only predict your name, but also your age, your favorite sports team or something else about yourself.\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "3": {
          "story_text": "In the previous levels you've created your first fortune telling machine, but Hedy couldn't really predict anything, only `{echo}`.\nIn this level you can use a variable and the `{at} {random}` command to really let Hedy choose an answer for you. Check out this code for instance:\n",
          "example_code": "```\n{print} I’m Hedy the fortune teller!\nquestion {is} {ask} What do you want to know?\n{print} This is what you want to know: question\nanswers {is} yes, no, maybe\n{print} My crystal ball says...\n{sleep} 2\n{print} answers {at} {random}\n```\n",
          "story_text_2": "### Exercise\nNow, Hedy can only answer yes, no or maybe. Can you give Hedy more answer options, like 'definitely' or 'ask again'.\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "4": {
          "story_text": "### Exercise\nWe have removed all the quotation marks from this example code, can you add them in all the right places?\n\n### Exercise 2\nGo back to the previous level and copy your fortune teller code. Make the code work in this level by adding quotation marks in the right spots.\n",
          "example_code": "```\n_ Add the quotation marks to this code _\n{print} Im Hedy the fortune teller!\nquestion {is} {ask} What do you want to know?\n{print} This is your question:  question\nanswers {is} yes, no, maybe\n{print} My crystal ball says...\n{sleep} 2\n{print} answers {at} {random}\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "5": {
          "story_text": "### Exercise\nIn the example code you see how to make a fortune teller program that allows you to tip the odds in your favor. This cheating program always tells you that you will win the lottery, but your friends will never win.\n\nUse this to make your own program, be creative! For example you could create a code that predicts that:\n* your favorite sports team will beat all the competitors!\n* your favorite movie will be chosen for movie night!\n* you win tickets to your favorite show!\n* you are the fairest of them all, like Snow White's magic mirror.\nLet your imagination do the work!\n\nYour program has to exist of at least 10 lines of code and need to have at least one `{if}` and `{else}` command.\n",
          "example_code": "```\nfriends {is} Jordan, Lucy, Dave\n{print} 'I can predict if you will win the lottery tomorrow!'\nperson {is} {ask} 'Who are you?'\ngood_answer {is} Hurray! You win!, You will definitely win!, We have a winner!\nbad_answer {is} Bad luck! Try again!, Another person will win, You lose!\n{if} person {in} friends {print} good_answer {at} {random}\n{else} {print} bad_answer {at} {random}\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate"
          ]
        },
        "6": {
          "story_text": "In this level you can use math in your predictions as a fortune teller. This allows you to make up (silly) formulas to calculate the future.\nFor example you could calculate how rich you'll get or how many kids you will have when you grow up.\n\n\n\n### Exercise\nCan you think of your own (silly) fortune telling machine?\n",
          "example_code": "```\n{print} 'I am Hedy the fortune teller!'\n{print} 'I can predict how many kids youll get when you grow up!'\nage = {ask} 'How old are you?'\nsiblings = {ask} 'How many siblings do you have?'\nlength = {ask} 'How tall are you in centimetres?'\nkids = length / age\nkids = kids - siblings\n{print} 'You will get ...'\n{sleep}\n{print} kids ' kids!'\n```\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "7": {
          "story_text": "### Exercise\nFinish this program that tells you if your crush loves you back or not.\n",
          "example_code": "```\n{print} 'I have a flower with magic petals'\n{print} 'If you pick the petals the flower will tell you if your crush loves you back'\namount = {ask} 'How many petals do you want to pick?'\noptions = they love you, they love you not\n_ _ _ _ options {at} {random}\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands",
            "repVariable"
          ]
        },
        "8": {
          "story_text": "In the next example you can have your fortune teller ask multiple questions and also print them!\n\n### Exercise\nCan you fill in right command on the blanks?\n",
          "example_code": "```\n{print} 'I am Hedy the fortune teller!'\n{print} 'You can ask me 3 questions.'\nanswers = yes, no, maybe\n_ _ _\n   question = {ask} 'What do you want to know?'\n   {print} question\n   {sleep}\n   {print} 'My crystal ball says... ' answers {at} {random}\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands"
          ]
        },
        "10": {
          "story_text": "In this level you'll learn how to program the game MASH (mansion, apartment, shack, house). In this game you can predict for all the players at once, what their future will look like.\n\n### Exercise\nFil in the blanks by using the new command that you've learned this level.\n",
          "example_code": "```\nhouses = mansion, apartment, shack, house\nloves = nobody, a royal, their neighbour, their true love\npets = dog, cat, elephant\nnames = Jenna, Ryan, Jim\n_\n    {print} name ' lives in a ' houses {at} {random}\n    {print} name ' will marry ' loves {at} {random}\n    {print} name ' will get a ' pets {at} {random} ' as their pet.'\n    {sleep}\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands",
            "repVariable"
          ]
        },
        "12": {
          "story_text": "From level 12 on, you will also have to use quotation marks in lists, before and after each item.\n\n### Exercise\nAdd two predictions to the list",
          "example_code": "```\nfortunes = 'you will slip on a banana peel', _\n{print} 'I will take a look in my crystal ball for your future.'\n{print} 'I see... I see...'\n{sleep}\n{print} fortunes {at} {random}\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        }
      }
    },
    "functions": {
      "name": "functions",
      "default_save_name": "functions",
      "description": "functions",
      "levels": {
        "12": {
          "story_text": "In this level you'll learn how to use **functions**. A function is a block of code you can easily use multiple times. Using functions helps us organize pieces of code that we can use again and again.\nTo create a function, use `{define}` and give the function a name. Then put all the lines you want in the function in a indented block under the `{define}` line.\nLeave one empty line in your code to make it look nice and neat. Great job! You have created a function!\n\nNow, whenever we need that block of code, we just use <code>{call}</code> with the function's name to call it up! We don't have to type that block of code again.\n\nCheck out this example code of a game of Twister. The function 'turn' contains a block of code that chooses which limb should go where.\n\n### Exercise\nFinish this code by setting the 2 variables chosen_limb and chosen_color.\nThen, choose how many times you want to call the function to give the twister spinner a spin.\n\n### Exercise 2\nImprove your code by adding a variable called 'people'. Use the variable to give all the players their own command in the game.\nFor example: 'Ahmed, right hand on green' or 'Jessica, left foot on yellow'.\n",
          "example_code": "```\nsides = 'left', 'right'\nlimbs = 'hand', 'foot'\ncolors = 'red', 'blue', 'green', 'yellow'\n\n{define} turn\n    chosen_side = sides {at} {random}\n    chosen_limb = limbs _\n    chosen_color = colors _\n    {print} chosen_side ' ' chosen_limb ' on ' chosen_color\n\n{print} 'Lets play a game of Twister!'\n{for} i {in} {range} 1 {to} _\n    {call} turn\n    {sleep} 2\n```\n",
          "learning_goals": [
            "seqInstructions",
            "decReused"
          ]
        },
        "13": {
          "story_text": "Now that you've learned how to use functions, you'll learn how to use a function with an argument.\nAn **argument** is a variable that is used within a function. It is not used outside the function.\n\nFor example in this code we've programmed the first verse of the song 'My Bonnie is over the ocean'.\nIn this example code the argument 'place' is used. Place is a variable that is only used in the function, so an argument.\nTo use 'place' we have placed `{with} place` after `{define} song`.\nWhen the function is called, the computer will replace the argument 'place', with the piece of text after `{call} song {with}`.\n\n### Exercise\nThe next verse of this song goes:\n\n```not_hedy_code\nLast night as I lay on my pillow\nLast night as I lay on my bed\nLast night as I lay on my pillow\nI dreamed that my Bonnie is dead\n```\n\nCan you program this verse in the same way as the example?\n",
          "example_code": "```\n{define} song {with} place\n    {print} 'My Bonnie is over the ' place\n\n{call} song {with} 'ocean'\n{call} song {with} 'sea'\n{call} song {with} 'ocean'\n```\n",
          "learning_goals": [
            "decSmaller",
            "decReused"
          ]
        },
        "14": {
          "story_text": "In the previous levels you have learned to create functions and use arguments with them. Another great use of a function is to let it calculate something for you.\nYou can give the function a calculation and it will give you the answer of the calculation. This answer is called a **return value**.\n\nFor example, in this code the function calculate_new_price will calculate the new price of any item. It will give you the new price as a return value.\n\n### Exercise\nFinish this code. We have already made the variable new_price for you, you only need to set it.\nYou should finish the line of code by calling the function that calculates the new price.\n",
          "example_code": "```\n{define} calculate_new_price {with} amount, percentage\n    percentage = percentage / 100\n    discount_amount = amount * percentage\n    {return} amount - discount_amount\n\nold_price = {ask} 'How much is on the price tag?'\ndiscount = {ask} 'What percentage is the discount?'\n\nnew_price = _ calculate_new_price {with} old_price, _\n{print} 'The new price is ' new_price ' dollar'\n```\n",
          "learning_goals": [
            "seqProgram",
            "decSmaller"
          ]
        },
        "18": {
          "story_text": "Let's make functions the Pythons way! To define a function, we no longer use:\n\n`{define} name_function {with} argument_1, argument_2:`\n\nbut we use:\n\n`{def} name_function(argument_1, argument_2):`.\n\n\nIf you don't want to use arguments, you just leave the space between the parantheses empty.\nTo call a function, we don't need the `{call}` command anymore. You just type the name of the function.\n",
          "example_code": "```\n{def} calculate_score(answer, correct_answer):\n    {if} answer == correct_answer:\n        score = 1\n    {elif} answer == '?':\n        score = 0\n    {else}:\n        score = -1\n    {return} score\n\nanswer = {input} ('Where can you find the Eiffel Tower?')\ncorrect_answer = 'Paris'\nscore = calculate_score(answer, correct_answer)\n{print} ('Your score is... ', score)\n```\n",
          "learning_goals": [
            "seqInstructions",
            "decSmaller"
          ]
        }
      }
    },
    "guess_my_number": {
      "name": "Guess my number",
      "default_save_name": "guess my number",
      "description": "guess my number",
      "levels": {
        "14": {
          "story_text": "In this level you can program the game 'Guess my number'\n\n### Exercise\nFill in the correct symbols on the blanks to get the game to work.\n",
          "example_code": "```\n{print} 'Guess my number'\nnumbers = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\nnumber = numbers {at} {random}\ngame = 'on'\n{for} i {in} {range} 1 {to} 10\n    {if} game == 'on'\n        guess = {ask} 'Which number do you think it is?'\n        {if} guess _ number\n            {print} 'Lower!'\n        {if} guess _ number\n            {print} 'Higher!'\n        {if} guess _ number\n            {print} 'You win!'\n            game = 'over'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate",
            "conBranches"
          ]
        }
      }
    },
    "hangman": {
      "name": "Hangman",
      "default_save_name": "Hangman",
      "description": "Guess the word",
      "levels": {
        "17": {
          "story_text": "In this adventure we program a game of hangman. First we make some preparations, then we program the game and in the third part we add a drawing with the turtle.\n\n### Exercise\n***Set the variables*** In this game of hangman, Player 1 chooses an answer and Player 2 has to guess the letters in this answer.\nTo let the computer know all the letters in the word, we will turn the answer into a list of letters. We also do this with the guesses Player 2 makes.\nWe will start the game with 2 empty lists. We have made an empty list for the variable answer for you. Now make an empty list for guessed_letters as well.\nThen we fill in how many mistakes were made. At the start of the game, this should be 0.\nThe variable `amount_letters` tells us how many letters are in the answer. Ask Player 1 to tell us how many letters their word has.\nLastly we tell the computer if the game is over. We use the variable `game_over` and set it to `False`.\n\n***Choosing the answer*** We want Player 1 to be able to choose the answer. We'll ask them, as many times as necessary, what the next letter is.\nThen we add that letter to the answer. Lastly, we add an empty _ to the list of guessed letters, so we get as many _s as there are letters in the answer.\n\n***Player 2's turn***\nTell Player 2 its their turn. Then tell Player 2 how many letters there are in the answer. Finally, print the list of `guessed_letters`.\n\n***Go to the next adventure*** Now that all the starting variables are set, we can start programming the game itself. Check out the next tab to learn how!\n",
          "example_code": "```\nprint 'Hangman!'\n\n# Set the variables\nanswer = []\nguessed_letters = _\nmistakes_made = _\namount_letters = {ask} _\n_ = 'False'\n\n# Choosing the answer\n{for} _\n    letter = {ask} 'Player 1, what is letter ' i '?'\n    _\n    {add} '_' {to} _\n\n# Player 2 turn\nprint _\nprint _\nprint guessed_letters\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "repVariable"
          ]
        }
      }
    },
    "hangman_2": {
      "name": "Hangman 2",
      "default_save_name": "Hangman_2",
      "description": "Hangman 2",
      "levels": {
        "17": {
          "story_text": "Now it's time to program the hangman game.\n\n### Exercise\n\n***Paste your code*** Copy your code from the previous adventure and paste the code in the programming field.\n\n***The game*** This games continues playing until Player 2 is game over. Fill in the while command accordingly. Now, Player 2 is allowed to guess a letter, so ask Player 2 to guess a letter.\nWe need to check if their answer is correct, so check if their `guess` is (somewhere) in the (list) `answer`. Then we let the computer figure out which of the letter(s) is the guess. We have already programmed that part for you.\nNext we want to compliment the player for finding a correct letter and we want to print the list `guessed_letters`, so the player can see their progress.\n\nThe next part we're going to program is what happens when the player has guessed all of the letters. So if their list of `guessed_letters` is the same as our list `answer`.\nIf the lists are the same, congratulate Player 2 with their victory and set the variable `game_over` to `True`.\n\nNext we'll program what happens when Player 2 guesses wrong (so the `{else}` command). First, tell the player that their guess was wrong. Then increase the `mistakes_made` variable by 1.\n\nFor the last part we'll program what happens when Player 2 has made 10 mistakes. We'll print that Player 1 has won the game. Then we'll print the correct answer. And finally, we'll set our `game_over` variable to `True`, so the game stops.\n\n***Go to the next adventure*** Amazing work! Your game is playable, but wouldn't it be fun if the hangman was actually drawn when Player 2 makes a mistake..?\n",
          "example_code": "```\n# Paste your code here\n\n# The game\n{while} game_over _\n    guess = _\n    {if} _\n        {for} i {in} {range} 1 {to} amount_letters:\n            if answer[i] == guess:\n                guessed_letters[i] = guess\n        {print} _\n        {if} guessed_letters == _:\n            {print} _\n            game_over = _\n    {else}:\n        {print} _\n        mistakes_made _\n        {if} _ == 10:\n            {print} _\n            {print} _\n            _\n```\n",
          "learning_goals": [
            "repCondition",
            "repNested",
            "conBranches"
          ]
        }
      }
    },
    "hangman_3": {
      "name": "Hangman 3",
      "default_save_name": "Hangman_3",
      "description": "Hangman 3",
      "levels": {
        "17": {
          "story_text": "In a game of hangman the mistakes are shown by drawing a part of the hangman each time a mistake has been made.\nWe now add those drawings with our turtle!\n\n### Exercise\n***Create a function that draws the hangman*** Create a function that draws the hangman in 10 steps. We have already made step 1 for you.\n\n***Test the function*** Test the function by calling the function with 10. If you are happy with the function, remove the line that calls the function for now. We will call the function when the player makes a mistake.\n\n***Paste your hangman game under your function*** Go back to the previous adventure and copy your hangman game. Paste the game underneath your function.\n\n***Call the function when the player makes a mistake*** Under the line `mistakes_made = mistakes_made + 1` we will call the function. We want the turtle to take the same amount of steps as the player has made mistakes, so we call the function with `mistakes_made` as argument.\n\n***Enjoy your game!***\n<div class=\"w-full flex flex-row gap-2\">\n    The hangman could look like this <img src=\"https://github.com/hedyorg/hedy/assets/80678586/d385b691-5701-4342-b5d9-dfae1589c129\" width=\"100\">\n</div>\n",
          "example_code": "```\n# Create a function that draws the hangman\n{define} draw_hangman {with} step:\n    {if} step == 1:\n        {color} white\n        {forward} -100\n        {turn} 90\n        {forward} -50\n        {color} black\n        {forward} 100\n        {forward} -50\n\n    {if} step == 2:\n        _\n# Paste your hangman game here\n\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conEvaluate",
            "conBranches",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "harry_potter": {
      "name": "Harry Potter",
      "default_save_name": "Harry Potter",
      "description": "Harry Potter adventures",
      "levels": {
        "10": {
          "story_text": "### Exercise\nWe can also make a Harry Potter themed fortune teller. Fill in blanks such that 9 lines are printed.\n**Extra** Change the theme of the fortune teller into something else, such as your favorite book, film or tv show.\n",
          "example_code": "```\nhouses = Gryffindor, Slytherin, Hufflepuff, Ravenclaw\nsubjects = potions, defence against the dark arts, charms, transfiguration\nfears = Voldemort, spiders, failing your OWL test\nnames = Harry, Ron, Hermione\n_\n_ {print} name ' is placed in ' houses {at} {random}\n_ {print} name ' is great at ' subjects {at} {random}\n_ {print} name 's greatest fear is ' fears {at} {random}\n```\n",
          "learning_goals": [
            "seqOrder",
            "repCommands",
            "repVariable"
          ]
        }
      }
    },
    "haunted": {
      "name": "Haunted House",
      "default_save_name": "Haunted House",
      "description": "Escape from the haunted house",
      "levels": {
        "1": {
          "story_text": "In this adventure you are working towards making a game in which you have to escape from a haunted house by picking the correct door.\nIf you pick the right door you'll survive, but if not a terrible monster might...\n\nIn level 1 we start our haunted house game by making up a scary story and ask the player what monster they'll see in the haunted house.\n",
          "example_code": "```\n{print} How did I get here?\n{print} I remember my friend telling me to go into the old mansion...\n{print} and suddenly everything went black.\n{print} But how did I end up on the floor...?\n{print} My head hurts like Ive been hit by a baseball bat!\n{print} What's that sound?\n{print} Oh no! I feel like Im not alone in this house!\n{print} I need to get out of here!\n{print} There are 3 doors in front of me..\n{ask} Which door should i pick?\n{echo} I choose door\n{print} ...?\n```\n",
          "story_text_2": "### Exercise\nCopy the example code to your input screen by clicking the yellow button.\nNow finish the story by adding at least 5 lines of code.\nRemember to start each line of codes with a `{print}` command.\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "In this haunted house you can choose your monsters with emojis. Of course you could also use words.\n",
          "example_code": "```\nmonster_1 {is} 👻\nmonster_2 {is} 🤡\nmonster_3 {is} 👶\n{print} You enter the haunted house.\n{print} Suddenly you see a monster_1\n{print} You run into the other room...\n{print} But a monster_2 is waiting there for you!\n{print} Oh no! Quickly get to the kitchen.\n{print} But as you enter monster_3 attacks you!\n```\n",
          "story_text_2": "### Exercise\nIn the example above the monsters are predetermined. So each time you run your code, the output is the same.\nCan you add `{ask}` commands to make the haunted house interactive and have the players choose the monsters they come across?\n",
          "example_code_2": "```\nmonster_1 {is} _\nmonster_2 {is} _\nmonster_3 {is} _\n{print} You enter the haunted house.\n{print} Suddenly you see a monster_1\n{print} You run into the other room...\n{print} But a monster_2 is waiting there for you!\n{print} Oh no! Quickly get to the kitchen.\n{print} But as you enter monster_3 attacks you!\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "3": {
          "story_text": "In the previous levels you've made an introduction to your haunted house game, but as you might have noticed the story would always have a dreadful end.\nIn this level you can make your story more interactive by changing the outcome of the game; sometimes you'll get eaten, sometimes you'll escape!\nLet Hedy decide randomly!\n\n### Exercise\nCopy the example codes and fill in the blanks to make it work!\n\n**Extra** This story is pretty straight forward, maybe you can spook it up a bit by adding a more exciting story.\nAlso you have very limited outcomes right now, there are only 3 options of what's behind the doors. Maybe you can think of more monsters to add to the list!\n",
          "example_code": "```\n_ Escape from the haunted house!\n_ There are 3 doors in front of you...\n_ _ _ Which door do you choose?\n_ You picked door ... choice\nmonsters _ a zombie, a vampire, NOTHING YOUVE ESCAPED\n_ You see...\n{sleep}\n_ _ _ _\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder"
          ]
        },
        "4": {
          "story_text": "In this level you learn how to use quotation marks in your games.\n\n### Exercise\nCan you make your Haunted House level 4 proof?\n\n### Exercise 2\nGo back to the previous level and copy your haunted house code. Make the code work in this level by adding quotation marks in the right spots.\n",
          "example_code": "```\n_ Add quotation marks to this code _\n{print} Escape from the haunted house!\n{print} There are 3 doors in front of you...\nchoice {is} {ask} Which door do you choose?\n{print} You picked door ... choice\nmonsters {is} a zombie, a vampire, NOTHING YOUVE ESCAPED\n{print} You see...\n{sleep}\n{print} monsters {at} {random}\n ```\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "5": {
          "story_text": "Up until this level the haunted house game always asked the player to choose a door, but as you might have noticed, they didn't really have to answer correctly.\nIf the player filled in a completely random answer, the game would still work and the player might even win (despite not picking a door).\nIn this level you can only win the game by picking the same door Hedy picked randomly.\n\n### Exercise\nCan you find the 4 missing words to complete the code?\n",
          "example_code": "```\n{print} 'Escape from the haunted house!'\n{print} 'There are 3 doors in front of you...'\ndoors {is} 1, 2, 3\nmonsters {is} werewolf, mummy, vampire, zombie\nchosen_door {is} {ask} 'Which door do you choose?'\n{print} 'You chose door...' chosen_door\n{sleep}\ncorrect_door {is} doors {at} {random}\n_ _ _ _ {print} 'Great! Youve escaped!'\n{else} {print} 'Oh no! You are being eaten by a...' monsters {at} {random}\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        },
        "9": {
          "story_text": "In this level you can use nesting, which allows you to make the haunted house even more interactive!\n\n### Exercise\nNow it's very hard to win this game, can you make it easier to win?\nChange your code so it only has one wrong door and two correct doors instead of one correct door and two wrong ones? \nTip: This means changing the variable correct_door into wrong_door, and switching the `{if}` and `{else}` code.\nAnd of course you may also change the story and make it your own. Change the monsters or make it a happy game show where you get a gift!\n",
          "example_code": "```\n{print} 'Escape from the Haunted House!'\nplayer = alive\ndoors = 1, 2, 3\nmonsters = zombie, vampire, giant spider\n{repeat} 3 {times}\n    {if} player {is} alive\n        correct_door {is} doors {at} {random}\n        {print} 'There are 3 doors in front of you...'\n        chosen_door = {ask} 'Which door do you choose?'\n        {if} chosen_door {is} correct_door\n            {print} 'No monsters here!'\n        {else}\n            {print} 'You are eaten by a ' monsters {at} {random}\n            player = dead\n    {else}\n        {print} 'GAME OVER'\n{if} player {is} alive\n    {print} 'Great! You survived!'\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate",
            "conBranches"
          ]
        },
        "11": {
          "story_text": "In this level we've changed the `{for}` command so we can tell the player where they are. \n\n### Exercise 1\nFinish the program so the player knows which room they are in.\n\n### Exercise 2\nMake the program into an adventure by following these steps:\n\n1. Make a list of choices (like: fight or flight)\n2. Make sure the player can choose an option with `{ask}`\n3. Is answer correct? Then they may proceed to the next monster. Do they give a wrong answer? Let the player know with a `{print}`. \n\n**Extra** If you make a wrong choice, a monster is still shown! How could you change that?\n",
          "example_code": "```\n{print} 'Escape from the Haunted House!'\nmonsters = zombie, vampire, giant spider\n_\n    {print} 'Room ' i\n    monster = monsters {at} {random}\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "repCommands",
            "conEvaluate"
          ]
        },
        "14": {
          "story_text": "### Exercise\nIn this level you can use the `<` and `>` symbol to introduce lives to your game.\nMake sure the player loses a life when they come across the wrong monster and that the game stops if you have no lives left.\n",
          "example_code": "```\n{print} 'Escape from the haunted house'\nlives = 3\ndoors = 1, 2, 3\nmonsters = 'the wicked witch', 'a zombie', 'a sleeping 3 headed dog'\n{for} i {in} {range} 1 {to} 10\n    {if} lives _\n        good_door = doors {at} {random}\n        monster = monsters {at} {random}\n        chosen_door = {ask} 'Which door do you choose?'\n        {if} good_door == chosen_door\n            {print} 'You have chosen the correct door'\n        {else}\n            {print} 'You see...' monster\n            {if} monster == 'a sleeping 3 headed dog'\n                {print} 'Pffieuw.... Its asleep'\n            {else}\n                {print} 'You lose one life'\n                lives = _\n    {else}\n        {print} 'GAME OVER'\n```\n",
          "learning_goals": [
            "repCommands",
            "conEvaluate",
            "conBranches"
          ]
        },
        "16": {
          "story_text": "### Exercise\nThis haunted house game uses the connection between the lists you can use in this level.\nFor example: all the properties that belong to the zombie are first in all the lists, witch second and vampire third.\nCheck out the code and fill in  `weapons[i]`, `monsters[i]` , `bad_fate[i]`, `good_fate[i]`, `hint[i]` on the correct blanks to get the code to work!\n",
          "example_code": "```\nnumbers = [1, 2, 3]\ni = numbers[{random}]\nhint = ['growling', 'a cackling laugh', 'fluttering batwings']\nmonsters = ['zombie', 'witch', 'vampire']\nbad_fate = ['Your brain is eaten', 'You are forever cursed', 'You are bitten']\ngood_fate = ['You throw the ham. The zombie is distracted and starts eating it.', 'You set the curtains on fire. The witch flees out of fear for the fire', 'The vampire hates garlic and flees']\nweapons = ['ham', 'lighter', 'garlic']\n{print} 'You are standing in front of an old mansion'\n{print} 'Something is not right here'\n{print} 'You hear ' _\n{print} 'You are going to explore it'\n{print} 'You enter the kitchen and see a lighter, a raw ham and a garlic.'\nyour_weapon = {ask} 'What do you bring with you?'\n{print} 'With your ' your_weapon ' you enter the living room'\n{print} 'There you find a ' _\nneeded_weapon = _\n{if} your_weapon == needed_weapon\n    {print} 'You use your ' your_weapon\n    {print} _\n    {print} 'YOU WIN!'\n{else}\n    {print} 'You have chosen the wrong weapon...'\n    {print} _\n    {print} 'GAME OVER'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conEvaluate"
          ]
        }
      }
    },
    "hotel": {
      "name": "hotel",
      "default_save_name": "hotel",
      "description": "hotel",
      "levels": {
        "13": {
          "story_text": "In the previous adventure you have learned how to use an argument in a function, and you've learned how to combine it with an {ask}.\nYou might have wondered why you would use functions, because the functions in the example were only one line of code.\nNow we will show you what a bigger function looks like and we will use multiple agruments now as well. You'll see how much better it is to use a function once the function gets bigger.\nHere is an example of a function with arguments combined with {ask} commands.\n",
          "example_code": "```\n{define} welcome_message {with} title, last_name, country, room_number\n    {print} 'Welcome to Hotel Hedy, ' title ' ' last_name\n    nice_trip {is} {ask} 'Did you have a nice trip from, ' country '?'\n    {if} nice_trip {is} 'yes'\n        {print} 'Lovely!'\n    {else}\n        {print} 'Sorry to hear that.'\n        {print} 'Hopefully you can take a nice rest in you room.'\n    {print} 'Your room number is ' room_number\n\n{print} 'Hello. Please fill in your information to check in.'\ntitle = {ask} 'What is your title (mr, mrs, ms, dr, etc.)?'\nname = {ask} 'What is you last name?'\nhomecountry = {ask} 'What country do you come from?'\n\n{call} welcome_message {with} title, name, homecountry, 105\n```\n\ntitle = {ask} 'What is your title (mr, mrs, ms, dr, etc.)?'\nname = {ask} 'What is you last name?'\nhomecountry = {ask} 'What country do you come from?'\n\n{call} welcome_message {with} title, name, homecountry, 105\n",
          "learning_goals": [
            "conBranches",
            "decSmaller"
          ]
        }
      }
    },
    "if_command": {
      "name": "{if} & {else}",
      "default_save_name": "if_command",
      "description": "Introducing the {if} command",
      "levels": {
        "5": {
          "story_text": "## If... else....\nIn level 5 there is something new, the `{if}`! With the `{if}` you can choose between two different options.\nThis code prints nice if you enter Hedy as a name, and boo! if you enter something else.\n`{ask}` and `{print}` still work like they did in level 4.\n",
          "example_code": "```\nname {is} {ask} 'what is your name?'\n{if} name {is} Hedy {print} 'nice' {else} {print} 'boo!'\n```\n",
          "story_text_2": "Sometimes code with an `{if}` gets really long and does not fit on the line well. <br> You may also divide the code over two lines, starting the second line at the `{else}` like this:\n",
          "example_code_2": "```\nname {is} {ask} 'what is your name?'\n{if} name {is} Hedy {print} 'nice'\n{else} {print} 'boo!'\n```\n",
          "story_text_3": "### Exercise\nTry to create your own code with `{if}` and `{else}`. You can use the example code if you want.\n",
          "example_code_3": "```\nanswer {is} {ask} '2 + 2 = ?'\n_ _ _ 4 _ 'Great job!'\n_ _ 'No 2 + 2 = 4'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        },
        "8": {
          "story_text": "## If... Else...\nYou have learned to repeat a block of lines of code after a `{repeat}` command.\nNow you can also use indentation to make blocks after a {if} or {else} command.\nCheck out the example code.\n\n### Exercise\nAdd an {else} command to the example code. Make a block of line using indentation. You do this by starting each line with 4 spaces.\n",
          "example_code": "```\nname = {ask} 'What is your name?'\n{if} name {is} Hedy\n    {print} 'Welcome Hedy'\n    {print} 'You can play on your computer!'\n```\n",
          "learning_goals": [
            "conBranches"
          ]
        },
        "9": {
          "story_text": "In this level you can also put an `{if}` command inside another `{if}` command.\n",
          "example_code": "```\ncontinue = {ask} 'Do you want to continue?'\n{if} continue = yes\n    sure = {ask} 'Are you sure?'\n    {if} sure {is} yes\n        {print} 'We will continue'\n    {else}\n        {print} 'You are not sure'\n{else}\n    {print} 'You do not want to continue'\n```\n",
          "learning_goals": [
            "conBranches"
          ]
        }
      }
    },
    "in_command": {
      "name": "{in}",
      "default_save_name": "in_command",
      "description": "Introducing the {in} command",
      "levels": {
        "5": {
          "story_text": "## Lists\nWhen we want to check if something is in a list, we can now use the `{in}` command.\nThis code prints pretty! if you choose green or yellow, and meh otherwise.\n",
          "example_code": "```\npretty_colors {is} green, yellow\nfavorite_color {is} {ask} 'What is your favorite color?'\n{if} favorite_color {in} pretty_colors {print} 'pretty!'\n{else} {print} 'meh'\n```\n",
          "story_text_2": "### Exercise\nFinish the example code by filling in the blanks with commands that you've learned.\nWhen you've finished the code, try to create a code of your own and use a question that you've thought of yourself.\n",
          "example_code_2": "```\nanimals {is} dog, cow, sheep\nanswer {is} {ask} 'What is your favorite animal?'\n_ answer _ animals _ 'Mine too!'\n_ _ 'My favorite animals are dogs, cows and sheep'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        }
      }
    },
    "is_command": {
      "name": "{is}",
      "default_save_name": "is_command",
      "description": "introducing {is} command",
      "levels": {
        "2": {
          "story_text": "## Variables\nYou can name a word with `{is}`. This is called a **variable**. In this example we made a variable called name and a variable called age. You can use the word name anywhere in your code and it will be replaced by Hedy, like this:\n",
          "example_code": "```\nname {is} Hedy\nage {is} 15\n{print} name is age years old\n```\n",
          "story_text_2": "### Exercise\nTime to make your own variables!\nIn the example code we made an example of the variable `favorite_animal`. In line 1 the variable is set, and in line 2 we used the variable in a `{print}` command.\nFirstly, finish our example by filling in your favorite animal on the blank. Then make at least 3 of these codes yourself. Pick a variable, and set the variable with the `{is}` command. Then use it with a `{print}` command, just like we did.\n",
          "example_code_2": "```\nfavorite_animal {is} _\n{print} I like favorite_animal\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram"
          ]
        },
        "6": {
          "story_text": "We also make a change in storing a word in a variable! You may now use `=` instead of  `{is}` when we store a name or a number in a variable, like this:\n",
          "example_code": "```\nname = Hedy\nanswer = 20 + 4\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "14": {
          "story_text": "We are going to learn more new items. You might know them already from mathematics, the `<` and `>`.\nThe `<` checks if the first number is smaller than the second, for example age `<` 12 checks if age is smaller than 12.\nIf you want to check if the first number is smaller or equal to the second, you can use `<=`, for example age `<=` 11.\nThe `>` checks if the first number is bigger than the second, for example points `>` 10 checks if points is larger than 10.\nIf you want to check if the first number is bigger or equal to the second, you can use `>=`, for example points `>=` 11.\nYou use these comparisons in an `{if}`, like this:\n",
          "example_code": "```\nage = {ask} 'How old are you?'\n{if} age > 12\n    {print} 'You are older than I am!'\n```\n```\nage = {ask} 'How old are you?'\n{if} age < 12\n    {print} 'You are younger than me!'\n{else}\n    {print} 'You are older than me!'\n```\n",
          "story_text_2": "From this level on, if you want to compare exactly, you can use two equal signs. This is what most programming languages do:\n",
          "example_code_2": "```\nname = {ask} 'What is your name?'\n{if} name == 'Hedy'\n    {print} 'You are cool!'\n```\n",
          "story_text_3": "You can also compare if something is *not* equal to something else using `!=` like this:\n",
          "example_code_3": "```\nname = {ask} 'What is your name?'\n{if} name != 'Hedy'\n    {print} 'You are not Hedy'\n```\n",
          "learning_goals": [
            "conEvaluate",
            "conBranches"
          ]
        }
      }
    },
    "language": {
      "name": "Language",
      "default_save_name": "Language",
      "description": "Practice words in a foreign language",
      "levels": {
        "5": {
          "story_text": "Make your own program to practice your vocabulary in a new language.\n\n### Exercise\nMake the code longer by adding at least 3 more words for the player to learn.\n**Extra** Of course, you can choose to use a different language than French. You can change to code to any language you'd like to learn.\n",
          "example_code": "```\n{print} 'Learn French!'\ncat {is} {ask} '🐱'\n{if} cat {is} chat {print} 'Terrific!'\n{else} {print} 'No, cat is chat'\nfrog {is} {ask} '🐸'\n{if} frog {is} grenouille {print} 'Super!'\n{else} {print} 'No, frog is grenouille'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        },
        "16": {
          "story_text": "### Exercise\nTake a look at the example code. This is a program to practise French vocabulary. Now make your own program to practice your vocabulary in a new language.\nIf you don't know any other languages, you can use Google translate or you can use emojis and your native language.\n",
          "example_code": "```\nfrench_words = ['bonjour', 'ordinateur', 'pomme de terre']\ntranslation = ['hello', 'computer', 'potato']\nscore = 0\n{for} i {in} {range} 1 {to} 3\n    answer = {ask} 'What does ' french_words[i] ' mean?'\n    correct = translation[i]\n    {if} answer == correct\n        {print} 'Correct!'\n        score = score + 1\n    {else}\n        {print} 'Wrong, ' french_words[i] ' means ' translation[i]\n{print} 'You gave ' score ' correct answers.'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands",
            "repCondition",
            "conBranches"
          ]
        }
      }
    },
    "maths": {
      "name": "maths",
      "default_save_name": "maths",
      "description": "Introducing maths",
      "levels": {
        "6": {
          "story_text": "In this level you learn something new: you can now also calculate.\n\nThe plus is easy, you write it like with math: `5 + 5` for example. The minus also works fine, it is `5 - 5`.\n\nThe times is a bit different, because there is no times symbol on your keyboard. Just search, there really isn't!\nThat is why we multiply with the asterisk above 8: `5 * 5`. Read that as \"5 times 5\" that helps you remember it best.\n",
          "example_code": "```\n{print} '5 plus 5 is ' 5 + 5\n{print} '5 minus 5 is ' 5 - 5\n{print} '5 times 5 is ' 5 * 5\n{print} '5 divided by 5 is ' 5 / 5\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "12": {
          "story_text": "**Decimal numbers**\nSo far, Hedy did not allow for decimal numbers like 1.5, but now we do allow that. Note that computers use the `.` for decimal numbers.",
          "example_code": "```\n{print} 'Two and a half plus two and a half is...'\n{print} 2.5 + 2.5\n```\n",
          "story_text_2": "**Maths with words**\nIn this level you can also do addition with words like this:",
          "example_code_2": "```\na = 'Hello '\nb = 'world!'\n{print} a + b\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        }
      }
    },
    "music": {
      "name": "music",
      "default_save_name": "music",
      "description": "Play a tune!",
      "levels": {
        "1": {
          "story_text": "In this level you'll learn how to use the `{play}` command to play a tune!\n\nType `{play}` followed by the note you want to play. The scale goes C-D-E-F-G-A-B.\nAs you can see there are 7 different letters, but we can play more than just 7 notes.\nType a number between 0 and 9 behind the letter to choose the scale, for example after B4 comes C5.\nC0 is the lowest note you can play, B9 is the highest.\n\n### Exercise\nTry out the example code and then play around with it! Can you create your own melody?\nIn the next level you'll learn how to play some existing songs.",
          "example_code": "```\n{play} C4\n{play} D4\n{play} E4\n{play} F4\n{play} G4\n{play} A4\n{play} B4\n{play} C5\n```",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "### Exercise\nFinish the songs! We have started the codes for some melodies.\n",
          "example_code": "```\n{print} Old Mac Donald had a farm\n{play} C5\n{play} C5\n{play} C5\n{play} G4\n{play} A4\n{play} A4\n{play} G4\n```\n",
          "story_text_2": "As you can see, you can also use the `{sleep}` command to add a little pause in the song.",
          "example_code_2": "```\n{print} Twinkle Twinkle Little Star\n{play} C\n{play} C\n{play} G\n{play} G\n{play} A\n{play} A\n{play} G\n{sleep} 1\n{play} F\n{play} F\n```\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "3": {
          "story_text": "Create a random melody!\n\n### Exercise\nThe example code creates a random melody, but it's very short and not many notes are used.\nAdd more notes to the list and create a longer melody by copying the last line a couple more times.\n",
          "example_code": "```\nnotes {is} A4, B4, C4\n{play} notes {at} {random}\n{play} notes {at} {random}\n{play} notes {at} {random}\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "4": {
          "story_text": "Use the `{clear}` command to create a karaoke machine!\n\n### Exercise\nFinish the karaoke version of 'Mary had a little lamb'.\nThen, create a karaoke version of any song you'd like!\n",
          "example_code": "```\n{print} 'Mary had a little lamb'\n{play} E\n{play} D\n{play} C\n{play} D\n{play} E\n{play} E\n{play} E\n{clear}\n{print} 'Little lamb, little lamb'\n{play} D\n{play} D\n{play} D\n{play} E\n{play} E\n{play} E\n{clear}\n{print} 'Mary had a little lamb'\n{play} E\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder"
          ]
        },
        "5": {
          "story_text": "You don't always have to use the `{play}` command to play a whole song, sometimes you just want to play one note.\nFor example, if you want to make a quiz, you can play a happy high note if the answer is right and a sad low note if the answer is wrong.\n\n### Exercise\nFinish the first question by adding a line of code that plays a C3 note if the wrong answer is given.\nThen think of 3 more questions to add to this quiz.\n",
          "example_code": "```\nanswer {is} {ask} 'What is the capital of Zimbabwe?'\n{if} answer {is} Harare {play} C6\n_\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "conEvaluate"
          ]
        },
        "6": {
          "story_text": "Instead of playing notes, you can also play numbers now. Simply type `{play} 1` for the lowest note, `{play} 70` for the highest note, or anything in between.\n\n### Exercise\nThis calls for musical maths! Try out the example code a couple of times with different starting numbers.\nThen, see if you can compose a song using the numbers.\n",
          "example_code": "```\nnumber = {ask} 'Say a starting number between 1 and 67'\n{print} number\n{play} number\nnumber = number + 1\n{print} number\n{play} number\nnumber = number + 1\n{print} number\n{play} number\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "7": {
          "story_text": "Using the `{repeat}` command can make your codes for melodies a lot shorter!\n\n### Exercise\nFinish the code for Twinkle Twinkle Little Star by using the `{repeat}`command.\nThen go back to the songs you've made in the previous levels. Can you shorten those codes too?\n",
          "example_code": "```\n{print} 'Twinkle Twinkle Little Star'\n{repeat} 2 {times} {play} C4\n{repeat} 2 {times} {play} G4\n_\n```\n",
          "learning_goals": [
            "seqOrder",
            "repCommands"
          ]
        },
        "8": {
          "story_text": "Now that we can use the `{repeat}` command for multiple lines, we can make songs even more easily!\n\n### Exercise\nFinish the song of Brother John (Frère Jacques). Don't forget to use `{repeat}`!\n",
          "example_code": "```\n{print} 'Brother John'\n{repeat} 2 {times}\n    {play} C\n    {play} D\n    {play} E\n    {play} C\n{repeat} 2 {times}\n    {play} E\n    {play} F\n    {play} G\n    {sleep} 1\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands"
          ]
        },
        "9": {
          "story_text": "From this level on you can - among other things - use a {repeat} command inside a {repeat} command.\nThat makes songs like 'Happy birthday' even shorter!\n\n### Exercise\nFinish the song!\n",
          "example_code": "```\nfirst_time = yes\n{repeat} 2 {times}\n    {repeat} 2 {times}\n        {play} C\n    {play} D\n    {play} C\n    {if} first_time {is} yes\n        {play} F\n        {play} E\n        first_time {is} no\n    {else}\n        _\n```\n",
          "learning_goals": [
            "repNested",
            "conEvaluate",
            "conBranches"
          ]
        },
        "12": {
          "story_text": "Use functions in your songs! As you can see in the example code, you can make a function for each line of Twinkle Twinkle Little Star. Once you've programmed the first three lines, all you have to do is call the functions in the order you want them played in.\n\n### Exercise\nFinish the song of Twinkle Twinkle Little Star.\nThen look back at all the songs you've programmed in the levels before, can you make those codes better and shorter using functions too?\n",
          "example_code": "```\n{define} first_line\n    {play} C\n    {play} C\n    {play} G\n    {play} G\n    {play} A\n    {play} A\n    {play} G\n    {sleep}\n\n{define} second_line\n    {play} F\n    {play} F\n    {play} E\n    {play} E\n    {play} D\n    {play} D\n    {play} C\n    {sleep}\n\n{define} third_line\n    {play} G\n    {play} G\n    {play} F\n    {play} F\n    {play} E\n    {play} E\n    {play} D\n    {sleep}\n\n{call} _\n{call} _\n{call} _\n{call} _\n{call} _\n{call} _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "decSmaller"
          ]
        },
        "13": {
          "story_text": "You can use a function with an argument for songs that have line that are almost the same, but slightly different each time.\nOne example is the song 'Yankee Doodle'. The first 4 notes of the first lines are the same, but each time they are followed by a different couple of notes.\n\n### Exercise\nCan you finish the song of Yankee Doodle?\nCan you think of another song to program this way?\n",
          "example_code": "```\n{print} 'Yankee Doodle'\n{define} _ {with} note_1, note_2, note_3\n    {play} C4\n    {play} C4\n    {play} D4\n    {play} E4\n    {play} _\n    {play} _\n    {play} _\n\n{call} line_1 {with} 29, 31, 30\n{call} line_1 {with} 29, 28, 0\n{call} line_1 {with} 32, 31, 30\n\n{play} C4\n{play} B3\n{play} G3\n{play} A3\n{play} B3\n{play} C4\n{play} C4\n```\n",
          "learning_goals": [
            "decSmaller",
            "decReused"
          ]
        },
        "14": {
          "story_text": "You can program music for fun, but you can also use the musical notes to make something useful like a fire alarm!\n\n### Exercise\nMake sure the fire alarm rings when there is a fire!\n",
          "example_code": "```\n{define} fire_alarm\n    {print} 'FIRE!'\n    note = 40\n    {for} i {in} {range} 1 {to} 100\n        {if} note _ 50\n            note = note + 5\n            {play} _\n        {else}\n            note = 40\n\nfire = {ask} 'Is there a fire?'\n{if} fire _ 'yes'\n    {call} fire_alarm\n```\n",
          "learning_goals": [
            "seqModify",
            "repCommands",
            "conEvaluate",
            "conBranches",
            "decSmaller"
          ]
        },
        "15": {
          "story_text": "**Warning** This adventure can become extremely annoying!\nWe can also use the {while} command to repeat a song forever.\n\n### Exercise\nFinish the never-ending song.\n",
          "example_code": "```\n{define} song\n    {play} _\n\nyes_or_no = {ask} 'Do you want to hear my never-ending song?'\n{while} yes_or_no = 'yes'\n    {call} song\n    {print} '🥳'\n```\n",
          "learning_goals": [
            "repCondition",
            "decSmaller"
          ]
        },
        "16": {
          "story_text": "Upgrade your Old MacDonald code!\n\n### Exercise\nTake your code from the 'Sing a Song' adventure and add musical notes to it!\nYou can make a function for each line in the song and call that function after the line is printed.\nWe defined the first line for you and called it in the code. Can you finish the whole song?\n",
          "example_code": "```\n{define} line_1\n    {for} i {in} {range} 1 {to} 3\n        {play} G\n    {play} D\n    {for} i {in} {range} 1 {to} 2\n        {play} E\n    {play} D\n\nanimals = ['pig', 'dog', 'cow']\nsounds = ['oink', 'woof', 'moo']\nfor i in range 1 to 3\n    animal = animals[i]\n    sound = sounds[i]\n    print 'Old MacDonald had a farm'\n    call line_1\n    print 'E I E I O!'\n    _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqOrder",
            "repCommands",
            "decSmaller",
            "decReused"
          ]
        },
        "17": {
          "story_text": "You can use the {elif} to create different options.\n\n### Exercise\nFirstly, add colons to get the code to work.\nThen finish this code by adding at least 2 other songs for other moods. For example a happy song and an angry song.\n",
          "example_code": "```\n{define} scary_song\n    {for} i {in} {range} 1 {to} 3\n        {play} G\n    {play} E\n    {sleep} 2\n    {for} i {in} {range} 1 {to} 3\n        {play} F\n    {play} D\n\nmood = {ask} 'Which emotion are you feeling?'\n{if} mood {is} 'fear'\n    {call} scary_song\n{elif} _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conEvaluate",
            "conBranches",
            "decSmaller"
          ]
        },
        "18": {
          "story_text": "### Exercise\nEven in this last level of Hedy we can make some music! Be careful of all the syntax that is needed now.\nTake a good look at how the functions are defined and called upon in the example code.\nFinish the song!\n",
          "example_code": "```\n{def} line_1():\n    {for} i {in} {range}(1, 5):\n        {play} A\n    {play} D\n    {play} F\n    {play} A\n\n{def} line_2():\n    {for} i {in} {range}(1, 5):\n        {play} G\n    {play} C\n    {play} E\n    {play} G\n\n{def} line_3():\n_\n\n{print} ('The drunken sailor')\n{print} ('What shall we do with the drunken sailor?')\nline_1()\nline_2()\nline_3()\n{print} ('Early in the morning')\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands",
            "decSmaller",
            "debOutcome"
          ]
        }
      }
    },
    "parrot": {
      "name": "Parrot",
      "default_save_name": "Parrot",
      "description": "Create your own online pet parrot that will copy you!",
      "levels": {
        "1": {
          "story_text": "Create your own online pet parrot that will copy you!\n",
          "example_code": "```\n{print} Im Hedy the parrot\n{ask} whats your name?\n{echo}\n{echo}\n```\n",
          "story_text_2": "### Exercise\nCopy the example code to your input screen by clicking on the yellow button.\nMake the parrot ask a different question. Fill in the blanks in the example!\n**Extra** You can also let the parrot ask multiple questions. Type in some more lines of code beneath your own code.\n",
          "example_code_2": "```\n{print} Im Hedy the parrot\n{ask} _\n{echo}\n{echo}\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "In the previous level you've made a parrot that will repeat after you. In this level we'll make the parrot interactive using a variable and `{ask}` command.\nWe will also make the parrot more life-like by adding `{sleep}` commands after something is said.\n",
          "example_code": "```\n{print} Im Hedy the parrot\nname _ _ what is your name?\n{print} name\n_\n{print} squawk\n_\n{print} name\n```\n",
          "story_text_2": "### Exercise\nFirstly, finish line 2 with an `{is}` and an `{ask}` command.\nThen fill in a `{sleep}` command on line 4 and 6 to let the parrot stay quiet for a little bit.\n\n**Extra** Can you make the parrot ask for more then only your name by adding more lines of code?\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram"
          ]
        },
        "3": {
          "story_text": "Teach your parrot a new word with `{add}`.\n### Exercise\nCan you add the `{add} {to_list}` command to get the code to work?\n",
          "example_code": "```\nwords {is} squawk, Hedy\n{print} Train your parrot!\nnew_word {is} {ask} Which word do you want to teach them?\n_ new_word _ words\n{print} 🧒 Say new_word, Hedy!\n{print} 🦜 words {at} {random}\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "4": {
          "story_text": "In this level we have to use quotation marks with the commands `{ask}` and `{print}`.\n### Exercise\nComplete the code by filling in quotation marks on the blanks.\n",
          "example_code": "```\nwords {is} squawk, Hedy\n{print} _ Train your parrot! _\nnew_word {is} {ask} _ Which word do you want to teach them? _\n{add} new_word {to_list} words\n{print} _ 🧒 Say _ new_word _, Hedy!_\n{print} _ 🦜 _ words {at} {random}\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "5": {
          "story_text": "Reward your parrot if it says the correct word!\n\n### Exercise\nFinish the code by filling in the 4 missing commands.\n",
          "example_code": "```\nwords {is} squawk, Hedy\n{print} 'Train your parrot!'\nnew_word {is} {ask} 'Which word do you want to teach them?'\n{add} new_word {to_list} words\nsaid_word {is} words {at} {random}\n{print} '🧒 Say ' new_word ', Hedy!'\n{print} '🦜 ' said_word\n_ said_word {is} new_word _ '🧒 Great job, Hedy! 🍪'\n_ _ '🧒 No, Hedy! Say ' new_word\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        }
      }
    },
    "piggybank": {
      "name": "Piggy Bank",
      "default_save_name": "Piggy Bank",
      "description": "Count your pocketmoney!",
      "levels": {
        "12": {
          "story_text": "In this adventure you learn how to make a digital piggy bank.\n\n### Exercise\nFinish the code to calculate how much money you have and how long you need to save up to buy what you want!\n**Extra** Maybe you have already saved some money? Deduct that from the amount you will have to save up.\n",
          "example_code": "```\n{print} 'The digital piggy bank'\nwish = {ask} 'What would you like to buy?'\nprice = {ask} 'How much does that cost?'\nsaved = {ask} 'How much money have you saved already?'\nallowance = {ask} 'How much pocket money do you get per week?'\nto_save = price - saved\nweeks = to_save / allowance\n{print} 'You can buy a ' _ ' in ' _ ' weeks.'\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "14": {
          "story_text": "### Exercise\nIn this level you can let Hedy tell you if you have saved up enough money!\nFinish this code by filling in the blanks!\n",
          "example_code": "```\n_ calculate_budget {with} wish, money, allowance\n    to_save = wish - money\n    weeks = to_save / allowance\n    {if} wish _ money\n        {print} 'You need to save up some more!'\n        {print} 'Youll need ' weeks ' more weeks.'\n    {else}\n        {print} 'Great! You have enough'\n        {print} 'Lets go shopping!'\n\nmoney = {ask} 'How much money have you saved?'\nwish = {ask} 'How much money do you need?'\nallowance = {ask} 'How much pocket money do you get each week?'\n\n{call} _\n```\n",
          "learning_goals": [
            "seqProgram",
            "conBranches",
            "decSmaller"
          ]
        }
      }
    },
    "pressit": {
      "name": "Key presses",
      "default_save_name": "Pressed",
      "description": "Try linking a keyboard key to a command!",
      "levels": {
        "5": {
          "story_text": "In this level there is another new keyword: `{pressed}`!\nWith `{pressed}` you can use keys on your keyboard to control what lines are used.\n\n### Exercise\nLook at the example and add one more line of code that reacts to a key press.\n",
          "example_code": "```\n{print} 'Do you want a good (g) or bad (b) ending?'\n{if} g {is} {pressed} {print} 'They lived happily ever after ❤'\n{else} {print} 'The prince was eaten by a hippopotamus 😭'\n```\n",
          "story_text_2": "You can also link turtle commands to keys.\n\n### Exercise\nCopy the lines a few times so you can create a larger drawing.\n",
          "example_code_2": "```\n{if} y {is} {pressed} {forward} 15\n{else} {turn} 90\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "conEvaluate"
          ]
        },
        "7": {
          "story_text": "Now that you have learned about `{repeat}`, we can press keys multiple times.\nYou can use it to make the turtle walk forward and turn.\n\n### Exercise\nThe code you have seen in level 5 only checks the key once. Copy the example code and add a `{repeat}` to it, so that you can press the keys many times.\nUse this code to draw something nice.\n",
          "example_code": "```\n{if} x {is} {pressed} {forward} 15 {else} {turn} 90\n```\n",
          "learning_goals": [
            "seqOrder",
            "repCommands"
          ]
        },
        "9": {
          "story_text": "Now that you know how to combine statements, you can create a touch type tool with `{pressed}`.\n\n### Exercise\nFinish the code. Each time a random letter should be chosen, which you have to press. You get a point for a correct press, and and two points deduction for a wrong press.\n**Extra** Clear the screen after each letter, and show the user how many points they have scored.\n",
          "example_code": "```\npoints = 0\nletters = a, b, c, d, e\n{repeat} 10 {times}\n    letter = _ _ _\n    {print} 'Press the letter ' letter\n    {if} letter {is} {pressed}\n    _\n    _\n    _\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate",
            "conBranches"
          ]
        }
      }
    },
    "print_command": {
      "name": "{print}",
      "default_save_name": "print",
      "description": "Introduction print command",
      "levels": {
        "1": {
          "story_text": "## The print command\nYou can print text to the screen using the `{print}` command.\n",
          "example_code": "```\n{print} Hi there, programmer!\n{print} Welcome to Hedy!\n```\n",
          "story_text_2": "### Exercise\nIn Hedy you will find exercises in every adventure. An exercise allows you to practise the new commands and concepts, and lets you give your own twist to the example codes.\nIn this exercise you will see a pink blank space. You have to fill something in the place of the blank space before the code can be run.\n\nFill in the `{print}` command in the blank space and then add five more lines of code. Each line has to start with a `{print}` command.\nHave fun!\n",
          "example_code_2": "```\n_ Hello!\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram"
          ]
        },
        "18": {
          "story_text": "We arrived at real Python code! That means we need to use parentheses with `{print}` and `{range}` from now on.\nIt also means you can use Hedy code from this level in any Python environment as long as you use the English commands. If you haven't until now, you can switch the toggle in the commands menu to do so.",
          "example_code": "```\n{print}('Hello!')\n{for} i {in} {range}(1, 10):\n    {print}('This is line ', i)\n```\n",
          "story_text_2": "If you want to print more than one item, you need to separate them by commas.",
          "example_code_2": "```\ntemperature = 25\n{print}('It is ', temperature, ' degrees outside')\n```\n```\nname = 'Hedy'\n{print}('My name is ', name)\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        }
      }
    },
    "quizmaster": {
      "name": "Quizmaster",
      "default_save_name": "Quizmaster",
      "description": "Make your own quiz!",
      "levels": {
        "14": {
          "story_text": "### Exercise\nIn this adventure you can make your own quiz! Fill in the blanks, add more questions and enjoy your own quiz!\nYou can make a quiz about anything you like: your hobby, your favorite animal, your favorite book or anything at all!\n",
          "example_code": "```\n{print} 'Make your own quiz'\npoints_a = 0\npoints_b = 0\n{print} 'Question'\n{print} 'Answer option A'\n{print} 'Answer option B'\nanswer = {ask} 'Which answer?'\n{if} answer == 'A'\n    points_a = points_a + 1\n{if} answer == 'B'\n    points_b = points_b + 1\n{print} 'End of the quiz!'\n{print} 'Lets see the results!'\n{if} points_a > points_b\n    {print} 'You belong to the A club'\n{if} points_b > points_a\n    {print} 'You belong to the B club'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        }
      }
    },
    "quotation_marks": {
      "name": "'quotation marks'",
      "default_save_name": "quotation_marks",
      "description": "Introduction quotation marks",
      "levels": {
        "4": {
          "story_text": "## 'Quotation marks'\nIn level 4 `{ask}` and `{print}` have changed.\nYou must put text that you want to print between quotation marks.\nThis is useful, because now you can print all the words you want. Also the words you used to store something with `{is}`.\nMost programming languages also use quotation marks when printing, so we are also getting a step closer to real programming!\n",
          "example_code": "```\n{print} 'You need to use quotation marks from now on!'\nanswer {is} {ask} 'What do we need to use from now on?'\n{print} 'We need to use ' answer\n```\n",
          "story_text_2": "## Contractions\nImportant! Mind that now that we're using quotation marks, Hedy will get confused when you use the apostrophe for contractions like I'm or What's.\nMake sure to use double quotes when you're using an apostrophe in you line!\nCheck out the example code to see the wrong way of using apostrophes.\n",
          "example_code_2": "```\n_ This is the wrong way of using apostrophes _\n{print} 'I'm babysitting my sister's kids'\n{print} 'What's more fun than that?'\n_ This is how you solve it _\n{print} \"I'm babysitting my sister's kids\"\n{print} \"What's more fun than that?\"\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "12": {
          "story_text": "**All texts need to be in quotation marks**\nFor this level on you will also have to use quotation marks when storing a text with `=`:\n",
          "example_code": "```\nname = 'Hedy the Robot'\n{print} 'Hello ' name\n```\n",
          "story_text_2": "**All items in lists need quotation marks too**\nLists are texts, so they need quotation marks too. Mind that each single item on the list has quotation marks.\nThis allows you to save two words as 1 item on the list, for example 'Black Widow'.\n",
          "example_code_2": "```\nsuperheroes = 'Spiderman', 'Batman', 'Black Widow'\n{print} superheroes {at} {random}\n```\n",
          "story_text_3": "**All text after `{if}` comparisons need quotation marks too**\n",
          "example_code_3": "```\nname = {ask} 'What is your name?'\n{if} name = 'Hedy the Robot'\n    {print} 'Hi there!'\n```\n",
          "story_text_4": "**Numbers don't need quotation marks**\nFor numbers, you do not use quotation marks in the `=`:\n",
          "example_code_4": "```\nscore = 25\n{print} 'You got ' score\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        }
      }
    },
    "random_command": {
      "name": "{random}",
      "default_save_name": "random_command",
      "description": "introducing at random command",
      "levels": {
        "3": {
          "story_text": "## At random\nIn this level you can make a list using the `{is}` command. You can let the computer choose a random item from that list. You do that with `{at} {random}`.\n",
          "example_code": "```\nanimals {is} dogs, cats, kangaroos\n{print} animals {at} {random}\n```\n",
          "story_text_2": "You can use the `{at} {random}` command in a sentence as well.\n",
          "example_code_2": "```\nfood {is} sandwich, slice of pizza, salad, burrito\n{print} I am going to have a food {at} {random} for lunch.\n```\n",
          "story_text_3": "### Exercise\nTry out the `{at} {random}` command by making your own gameshow (like the ones on tv) where you choose a door or suitcase and it contains a big price!\nCan you do it? We have already put the first lines into the example code.\n",
          "example_code_3": "```\n{print} The big gameshow!\n{print} There are 3 suitcases in front of you...\nchosen {is} {ask} Which suitcase do you choose?\nprices {is} _\n_\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram"
          ]
        },
        "16": {
          "story_text": "We are going to make lists the Python way, with square brackets around the lists! We also keep the quotation marks around each item like we have learned in previous levels.\nWe use square brackets to point out a place in a list. For example: `friends[1]` is the first name on the list of friends, as you can see in the first part of the example code.\nThe second part of the example code shows you that we can also match 2 lists using the variable i.",
          "example_code": "```\nfriends = ['Ahmed', 'Ben', 'Cayden']\n{print} friends[1] ' is the first friend on the list.'\n{print} friends[2] ' is the second friend on the list.'\n{print} friends[3] ' is the third friend on the list.'\n#now we will match 2 lists using the variable i\nlucky_numbers = [15, 18, 6]\n{for} i {in} {range} 1 {to} 3\n    {print} friends[i] 's lucky number is ' lucky_numbers[i]\n```\n",
          "story_text_2": "Now that you've learned to use the brackets in lists, you can also start using the {at} {random} command in the Python way!\nYou simply type the name of your list with `[random]` behind it!",
          "example_code_2": "```\nfruit = ['apple', 'banana', 'cherry']\n{print} fruit[random]\n```",
          "learning_goals": [
            "seqInstructions"
          ]
        }
      }
    },
    "repeat_command": {
      "name": "{repeat}",
      "default_save_name": "repeat_command",
      "description": "{repeat} command",
      "levels": {
        "7": {
          "story_text": "## Repeat! Repeat! Repeat!\nLevel 7 adds the `{repeat}` command.  `{repeat}` can be used to execute one line of code multiple times. Like this:\n\n### Exercise\nPlay around with the `{repeat}` command. Can you make the happy birthday song in only 3 lines of code instead of 4 now?\n",
          "example_code": "```\n{repeat} 3 {times} {print} 'Hedy is fun!'\n```\n",
          "learning_goals": [
            "repCommands"
          ]
        },
        "8": {
          "story_text": "### Repeat commands and indentation\nIn this level you can repeat multiple lines of code with only 1 repeat command.\nYou do this by making a block of lines that you want to repeat.\nThe lines in this block will need **indentation** .\nThat means putting four spaces at the beginning of each line. You will also have to indent when you just want to create a block of one line.\n",
          "example_code": "```\n{repeat} 5 {times}\n    {print} 'Hello everyone'\n    {print} 'This is all repeated 5 times'\n```\n",
          "learning_goals": [
            "repCommands"
          ]
        },
        "9": {
          "story_text": "Great job! You've reached another new level! In the previous level you've learned to use multiple lines of code in an `{if}` or `{repeat}` command. \nBut you can't yet combine the two...\n\nGood news! In this level you will be allowed to put an `{if}` inside an `{if}`, `{repeat}` inside a `{repeat}` command and in eachother.\nGive it a try!\n",
          "example_code": "```\n{repeat} 3 {times}\n    order = {ask} 'What would you like to order?'\n    {if} order {is} pizza\n        {print} 'Yammie'\n    {else}\n        {print} 'pizza is better!'\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "conEvaluate",
            "conBranches"
          ]
        }
      }
    },
    "repeat_command_2": {
      "name": "{repeat} 2",
      "default_save_name": "repeat_command_2",
      "description": "{repeat} command 2",
      "levels": {
        "7": {
          "story_text": "## Repeat with other commands and with variables\nYou have practiced the `{repeat}` command in combination with the `{print}` command now, but did you know you could also use other commands with `{repeat}` ?\nIn this example code you can see that `{repeat}` can also be used with an `{ask}`, `{if}` or `{else}` command.\n",
          "example_code": "```\n{repeat} 2 {times} answer = {ask} 'Did you know you could ask a question multiple times?'\n{if} answer {is} yes {repeat} 2 {times} {print} 'You knew that already!'\n{else} {repeat} 3 {times} {print} 'You have learned something new!'\n```\n",
          "story_text_2": "Another interesting thing you can do with the `{repeat}` command is using variables to set the amount of times something should be repeated. In the example code you can see that we first ask the person how old they are.\nThen, in line 3, the question is repeated 'age' times. So we have used the variable 'age' with the `{repeat}` command.\n",
          "example_code_2": "```\n{print} 'Yay! It is your birthday!'\nage = {ask} 'How old are you now?'\n{repeat} age {times} {print} 'Hip Hip Hurray!'\n```\n",
          "learning_goals": [
            "repCommands",
            "repVariable",
            "conEvaluate"
          ]
        },
        "8": {
          "story_text": "### In the block or not?\nIn this level you have to think carefully which lines of code should be in the block and which shouldn't.\nFor example: If you want to sing the song *the muffin man*. You only want the line with 'the muffin man' to be repeated twice.\nThis means the last line shouldn't start with indentation as it doesn't belong to the block.\nIf you do start the last line with indentation the song will turn out wrong.\n\n### Exercise\nEach line in the example code starts with a blank. Remove the blanks and try to figure out which line need indentation and which don't to make the muffin man song.\n",
          "example_code": "```\n_ {print} 'Do you know the muffin man?'\n_ {repeat} 2 {times}\n_ {print} 'The muffin man'\n_ {print} 'Do you know the muffin man, who lives on Drury Lane?'\n```\n",
          "learning_goals": [
            "seqModify",
            "repCommands"
          ]
        }
      }
    },
    "restaurant": {
      "name": "Restaurant",
      "default_save_name": "Restaurant",
      "description": "Create your own virtual restaurant",
      "levels": {
        "1": {
          "story_text": "In level 1 you can make your own virtual restaurant and take your guests' orders.\n",
          "story_text_2": "### Exercise\nCopy the example code into your input screen by clicking the yellow button.\nFirstly, fill in the correct command on the blanks to make to code work properly.\nThen add at least 4 more lines of code to the restaurant program.\nAsk the costumer what they would like to drink and ask if they want to pay with cash or card.\nLastly, think of a nice way to say goodbye to your costumer.\n",
          "example_code_2": "```\n{print} Welcome to Hedy's restaurant 🍟\n_ What would you like to order?\n{echo} So you would like to order\n{print} Thank you for your order!\n{print} It's on its way!\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "In level 2 you could expand your restaurant by using variables. In level 1 Hedy could only `{echo}` the order once and only remember the last thing that was ordered.\nNow you can use variables and Hedy can remember both the food and the toppings!\n",
          "example_code": "```\n{print} Welcome to Hedy's restaurant!\n{print} Today we're serving pizza or lasagna.\nfood {is} {ask} What would you like to eat?\n{print} Great choice! The food is my favorite!\ntopping {is} {ask} Would you like meat or veggies on that?\n{print} food with topping is on its way!\n```\n",
          "story_text_2": "### Exercise\nCopy your own restaurant code from to previous level to the input screen below.\nFix the code by replacing the `{ask}` and `{echo}` commands and using variables, like you've learned in this level.\n\nNow that your code is working again, it's time to add something more.\nLook at the last line of the example code: `{print} food with topping is on its way!`\nIn this single line 2 variables have been used to create a summary of the order.\nNow add your own summary of the food and drinks ordered by the customer.\n\n**Extra** Now that you've learned how to use variables, you can use as many variables in one line as you'd like. Can you add more variables to your code, like eat in or take-away, cash or card, with or without a straw etc.?\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder"
          ]
        },
        "3": {
          "story_text": "Having trouble to decide what you wanna have for dinner? You can let Hedy choose for you!\nSimply add lists of your favorite (or least favorite) meals and Hedy can randomly choose your dinner.\nYou can also have a bit of fun, by letting Hedy choose the price for your dinner as well! What will you get?\n",
          "example_code": "```\ndishes {is} spaghetti, brussels sprouts, hamburgers\n{print} You will have dishes {at} {random} tonight!\nprices {is} 1 euro, 10 euros, 100 euros\n{print} That will be prices {at} {random} please.\n```\n",
          "story_text_2": "### Exercise\nNow make your own version of the random restaurant.\nMake a list of starts, mains, desserts, drinks and prices yourself.\nThen use `{print}` and `{at} {random}` commands to tell the costumer what will be on their menu tonight.\n",
          "example_code_2": "```\n{print} Welcome to your own random restaurant!\nstarters {is} _\nmains {is} _\ndesserts {is} _\ndrinks {is} _\nprices {is} _\n_\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram"
          ]
        },
        "4": {
          "story_text": "In the restaurant you have to use quotation marks too when using the `{print}` or `{ask}` command.\n\n### Exercise\nAdd the quotation marks to this code to make it work! Be careful: variables should not be in quotation marks.\nThen, use the `{clear}` command to only show one line at a time in your output screen.\n\n### Exercise 2\nGo back to the previous level and copy your restaurant code. Make the code work in this level by adding quotation marks in the right spots and add some `{clear}` commands.\n",
          "example_code": "```\n_ Add the quotation marks to this code _\n{print} Welcome to Restaurant Chez Hedy!\n{print} Today we are serving pizza or lasagna.\nfood {is} {ask} What would you like to eat?\n{print} Great choice! The  food  is my favorite!\ntopping {is} {ask} Would you like meat or veggies on that?\n{print} food  with  topping  is on its way!\ndrinks {is} {ask} What would you like to drink with that?\n{print} Thank you for your order.\n{print} Your  food  and  drinks  will be right there!\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "5": {
          "story_text": "### Exercise\nThe example code shows how you could program that you've run out of a menu item in your restaurant.\nCopy your own restaurant code from the previous levels. Create a problem in your restaurant and code it, like the example code did.\nFor instance, you could also run out of a menu item, or you don't take credit cards, or the ice cream machine is broken.\n\n**Extra** Have you programmed the problem and programmed appropriate responses? Then try to add more `{if}` and `{else}` commands into your code.\nTry to add an `{if}` after every `{ask}` command in your code to make the code as interactive as possible!\n",
          "example_code": "```\ndrinks_in_stock {is} water, lemonade, cola, orange juice\ndrink {is} {ask} 'What would you like to drink?'\n{if} drink {in} drinks_in_stock {print} 'One ' drink 'coming up!'\n{else} {print} 'Sorry, we do not sell that'\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate"
          ]
        },
        "6": {
          "story_text": "In this level you can use maths to calculate the total price of your customer's order, which can make your virtual restaurant more realistic.\nBut you can also add many more things to your virtual restaurant, for example more courses.\n\n### Exercise\nYou can add many more things to your virtual restaurant. For example, can you...\n- ask how many people are coming and multiply the price by that amount?\n- add another course?\n- give people a discount when they enter a (secret) couponcode?\n- add a children's menu?\n- think of other fun things to add?\n",
          "example_code": "You can make a simple restaurant code, like this:\n```\n{print} 'Welcome to Restaurant Chez Hedy'\n{print} 'Here is our menu:'\n{print} 'Our main courses are pizza, lasagne, or spaghetti'\nmain = {ask} 'Which main course would you like?'\nprice = 0\n{if} main {is} pizza price = 10\n{if} main {is} lasagne price = 12\n{if} main {is} spaghetti price = 8\n{print} 'You have ordered ' main\n{print} 'That will be ' price ' dollars, please'\n{print} 'Thank you, enjoy your meal!'\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate"
          ]
        },
        "7": {
          "story_text": "In this level you've learned how to use the `{repeat}` command to repeat a line of code a certain amount of times.\nYou can use that in your restaurant to `{ask}` multiple people what they'd like to eat.\n\n### Exercise\nCan you complete the code? Hedy needs to repeat this question as many times as there are people. So if there are 5 people, the question needs to be asked 5 times.\n**Extra** Expand your code with more questions, for example about drinks or sauce.\n",
          "example_code": "```\n{print} 'Welcome to Restaurant Chez Hedy'\npeople = {ask} 'How many people are joining us today?'\n```\n",
          "learning_goals": [
            "seqOrder",
            "repVariable"
          ]
        },
        "8": {
          "story_text": "In this level you can make your virtual restaurant more elaborate by repeating multiple lines of code. Like this:\n\n### Exercise\nThis code can be expanded with more items on the menu, for example offering drinks, and/or multiple courses or desserts. Add at least one more item.\n**Extra** Add even more items, as many options as you like!\n",
          "example_code": "```\n{print} 'Welcome to Restaurant Chez Hedy!'\npeople = {ask} 'How many people will be joining us today?'\n{print} 'Great!'\n{repeat} people {times}\n    food = {ask} 'What would you like to order?'\n    {print} food\n{print} 'Thank you for ordering!'\n{print} 'Enjoy your meal!'\n```\n",
          "learning_goals": [
            "seqOrder",
            "repVariable",
            "conEvaluate"
          ]
        },
        "9": {
          "story_text": "In this level you can use nesting to make your restaurant more realistic and more fun!\n\n### Exercise\nThe indentation was removed in the example code. \nCan you figure out how much indentation each line needs in order for the code to work properly?\nIf the customer orders pizza, Hedy shouldn't ask what sauce the costumer wants.\n\n**Extra** A restaurant does not stock all sauces. Make a list of available sauces and give a reply with each order whether you sell it. <br>\n**Extra** Pizzas have toppings. Ask customers what they want.<br>\n**Extra** Do customers want a drink? Ask them too! <br>\n",
          "example_code": "```\n{print} 'Welcome to Restaurant Chez Hedy!'\npeople = {ask} 'How many people will be joining us today?'\n{print} 'Great!'\nprice = 0\n{repeat} people {times}\n_ food = {ask} 'What would you like to order?'\n_ {print} food\n_ {if} food {is} fries\n_ price = price + 3\n_ sauce = {ask} 'What kind of sauce would you like with your fries?'\n_ {if} sauce {is} no\n_ {print} 'no sauce'\n_ {else}\n_ price = price + 1\n_ {print} 'with ' sauce\n_ {if} food {is} pizza\n_ price = price + 4\n{print} 'That will be ' price ' dollar'\n{print} 'Enjoy your meal!'\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate",
            "conBranches"
          ]
        },
        "10": {
          "story_text": "In this level you'll learn how to easily ask orders for different courses.\n\n### Exercise 1\nFinish the code with an `{ask}` on the blanks such that the customer is asked what they want to eat for each course.\n",
          "example_code": "```\ncourses = appetizer, main course, dessert\n{for} course {in} courses\n    {print} 'What is your order for ' course '?'\n    _ \n    _\n```\n",
          "story_text_2": "### Exercise\nOf course, you could also order for multiple people!\nCan you add the correct amount of indentation before each line to make the code work properly?\nTip: some lines don't need any indentation at all.\n",
          "example_code_2": "```\n_ courses = appetizer, main course, dessert\n_ names = Timon, Ono\n_ {for} name {in} names\n_ {for} course {in} courses\n_ food = {ask} name ', what would you like to eat as your ' course '?'\n_ {print} name ' orders ' food ' as their ' course\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqModify",
            "repCommands",
            "repVariable"
          ]
        },
        "11": {
          "story_text": "We can use the `{for}` with `{range}` to print the orders from multiple customers in an orderly manner.\n\n### Exercise\nFinish the restaurant code, so that you can ask for the order of multiple people. Print the order number each time: 'Order 1', 'Order 2', etc.\nAre you not sure how to go about this? Have a peek at your level 8 code.\n\n**Extra** In level 9 the restaurant also used prices. You can add that here too!\n",
          "example_code": "```\n{print} 'Welcome to Restaurant Hedy!'\npeople = {ask} 'For how many people would you like to order?'\n{print} 'So you want to order for ' people ' people.'\n{print} \"Let's go!\"\n```\n",
          "learning_goals": [
            "seqOrder",
            "repCommands",
            "repVariable"
          ]
        },
        "12": {
          "story_text": "From this level on, you can use decimal numbers to make your menu more realistic.\n\n### Exercise\nCan you think of a code to give your friends and family a 15% discount?\n",
          "example_code": "```\nprice = 0.0\nfood = {ask} 'What would you like to order?'\ndrink = {ask} 'What would you like to drink?'\n{if} food {is} 'hamburger'\n    price = price + 6.50\n{if} food {is} 'pizza'\n    price = price + 5.75\n{if} drink {is} 'water'\n    price = price + 1.20\n{if} drink {is} 'soda'\n    price = price + 2.35\n{print} 'That will be ' price ' dollar, please'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conEvaluate"
          ]
        },
        "13": {
          "story_text": "In this level you will learn new commands to extend your code even further.\n\n### Exercise 1\nPlace a `{and}` and a `{or}` in the logical place in the program.\n\n### Exercise 2\nExpand your restaurant with at least one more `{and}` and one `{or}`.\nFor example, create a special discount coupon that only applies to pizza, or give your customer a free drink\nwith fries and pancakes. Or something completely different of course!\n",
          "example_code": "```\nprice = 10\nfood = {ask} 'What would you like to eat?'\ndrinks = {ask} 'What would you like to drink?'\n{if} food {is} 'sandwich' _ drinks {is} 'juice'\n    {print} 'That is our discount menu'\n    price = price - 3\n{if} drinks {is} 'water' _ drinks {is} 'juice'\n    {print} 'That is a healthy choice'\n{print} 'That will be ' price ' dollars'\n```\n",
          "learning_goals": [
            "seqProgram",
            "conCombine"
          ]
        },
        "15": {
          "story_text": "With the `{while}` you can make sure your costumers can keep adding orders until they are done.\n\n### Exercise\nCorrectly add the `{while}` command to this code.\n",
          "example_code": "```\n{print} 'Welcome at McHedy'\nmore = 'yes'\n_\n    order = {ask} 'What would you like to order?'\n    {print} order\n    more = {ask} 'Would you like to order anything else?'\n{print} 'Thank you!'\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands",
            "repVariable",
            "repCondition"
          ]
        }
      }
    },
    "rock": {
      "name": "Rock, paper, scissors",
      "default_save_name": "Rock_2",
      "description": "Make your own rock, paper, scissors game",
      "levels": {
        "1": {
          "story_text": "In level 1 you can start with a rock, paper, scissors  game.\n\nWith `{ask}` you can make a choice, and with `{echo}` you can repeat that choice.\n",
          "example_code": "```\n{print} what do you choose?\n{ask} choose from rock, paper or scissors\n{echo} so your choice was:\n```\n",
          "story_text_2": "### Exercise\nInstead of using words, you could also use emojis: ✊✋✌\nCan you create a code using emojis?\n",
          "example_code_2": "```\n{print} what do you choose?\n{ask} choose from _\n{echo} so your choice was:\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "In this level you can practise using the variables, so that you can make the rock, paper, scissors game in the next level!\n### Exercise\nFinish the code by filling in the **variable** on the blank.\nThis game is not very interactive, but no worries! In the next adventure you'll learn how to use variables with the `{ask}` command to make your game interactive!\n",
          "example_code": "```\nchoice {is} rock\n{print} I choose _\n```",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "3": {
          "story_text": "You can use the `{at} {random}` command to let the computer pick rock, paper or scissors!\n\n### Exercise\nFinish the code by using the `{at} {random}` command.\n",
          "example_code": "```\nchoices {is} rock, paper, scissors\n{print} choices _\n```\n",
          "story_text_2": "**Extra** Make a two player game. Firstly ask the two players to fill in their names. Then let the computer randomly pick their choices.\n",
          "example_code_2": "```\nchoices {is} rock, paper, scissors\nplayer_1 {is} {ask} Name of player 1:\n_\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder"
          ]
        },
        "4": {
          "story_text": "In this level we can further program rock, paper, scissors. But if you want to add text, you have to use quotation marks here too.\n### Exercise\nFill in quotation marks on the blanks. Mind that the variable `choices` should be outside the quotes.\n",
          "example_code": "```\nchoices {is} rock, paper, scissors\n{print} _The computer chooses..._ choices {at} {random}\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "5": {
          "story_text": "In this level we can determine whether it's a tie or not. For that you need the new `{if}` code.\n\n### Exercise\nFinish the code by filling in the blanks:\n* Let the computer pick a random option\n* Ask the player what they want to choose\n* Fill in the correct variables in line 4 and 5\n* Finish line 6 so that Hedy can check whether it's a tie or not.\n",
          "example_code": "```\noptions {is} rock, paper, scissors\ncomputer_choice {is} _\nchoice {is} _\n{print} 'you chose ' _\n{print} 'computer chose ' _\n{if} _ {is} _ {print} 'tie!' {else} {print} 'no tie'\n```\n\nFill in the correct code on the blanks to see if it is a draw.\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate"
          ]
        },
        "9": {
          "story_text": "In this level you can program the whole rock, paper, scissors game by nesting the `{if}` commands. \n\n### Exercise\nCan you finish the code? The program must tell who has won for every combination.\n\n**Extra** Want to play more than one game? Expand the code so that you can play multiple rounds. You can even use an `{ask}` to ask the user how many rounds they want to play.\n",
          "example_code": "```\nchoices = rock, paper, scissors\nyour_choice {is} {ask} 'What do you choose?'\n{print} 'You choose ' your_choice\ncomputer_choice {is} choices {at} {random}\n{print} 'The computer chooses ' computer_choice\n{if} computer_choice {is} your_choice\n    {print} 'Tie'\n{if} computer_choice {is} rock\n    {if} your_choice {is} paper\n        {print} 'You win!'\n    {if} your_choice {is} scissors\n        {print} 'You lose!'\n# finish this code\n```\n",
          "learning_goals": [
            "conEvaluate",
            "conBranches"
          ]
        },
        "10": {
          "story_text": "### Exercise\nIn the previous levels you have often made your own rock paper scissors game. Can you finish the code and use the `{for}` command properly to get the game to work?\n",
          "example_code": "```\nchoices = _\nplayers = _\n{for} _\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "repVariable",
            "conEvaluate"
          ]
        },
        "13": {
          "story_text": "With the `{and}` command you can shorten your rock, paper, scissors code! Check out the example code.\n\n### Exercise\nFinish the code such that a winner is always decided on. Run your code a few times to verify there is always a winner printed.\n",
          "example_code": "```\noptions = 'rock', 'paper', 'scissors'\nyour_choice = {ask} 'What do you choose?'\ncomputer_choice = options {at} {random}\n{print} 'You choose ' your_choice\n{print} 'The computer chooses ' computer_choice\n{if} computer_choice {is} your_choice\n    {print} 'Tie'\n{if} computer_choice {is} 'rock' {and} your_choice {is} 'paper'\n    {print} 'You win!'\n{if} computer_choice {is} 'rock' {and} your_choice {is} 'scissors'\n    {print} 'The computer wins!'\n_\n```\n",
          "learning_goals": [
            "conEvaluate",
            "conCombine"
          ]
        },
        "15": {
          "story_text": "### Exercise\nPlay until you beat the computer! But first, finish the example code...\n",
          "example_code": "```\nwon = 'no'\noptions = 'rock', 'paper', 'scissors'\n{while} won == 'no'\n    your_choice = {ask} 'What do you choose?'\n    computer_choice = options {at} {random}\n    {print} 'you chose ' your_choice\n    {print} 'the computer chose ' computer_choice\n    {if} computer_choice == your_choice\n        {print} 'Tie!'\n    {if} computer_choice == 'rock' {and} your_choice == 'scissors'\n        {print} 'You lose!'\n    {if} computer_choice == 'rock' {and} your_choice == 'paper'\n        {print} 'You win!'\n        won = 'yes'\n_\n```\n",
          "learning_goals": [
            "repCondition",
            "conEvaluate",
            "conBranches"
          ]
        }
      }
    },
    "rock_2": {
      "name": "Rock, paper, scissors 2",
      "default_save_name": "rock_2",
      "description": "Part 2 of rock, paper, scissors",
      "levels": {
        "2": {
          "story_text": "Now that you have learned how to use the `{ask}` command, you can make your rock, paper, scissors code interactive too!\n\n### Exercise\nMake the rock, paper, scissors code interactive by adding the `{ask}` command and a question to your rock, paper, scissors code.\n",
          "example_code": "```\nchoice {is} _\n{print} I choose choice\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram"
          ]
        }
      }
    },
    "secret": {
      "name": "SuperSpy",
      "default_save_name": "SuperSpy",
      "description": "Make your own spy code",
      "levels": {
        "12": {
          "story_text": "In this adventure you can create your own super spy code. Encode a message that only the right agent can decipher.\nIf the enemy tries to crack the code, they will get some false info to waste their time.\n\n### Exercise 1\nMake your own secret code for your superspy and return both parts only to the real spy.\n\n### Exercise 2\nAdd a third component to the code, like a piece of clothing or an object.\n",
          "example_code": "```\nname = {ask} 'What is your name?'\n{if} name {is} _\n    a = 'Go to the airport '\n{else}\n    a = 'Go to the trainstation '\npassword = {ask} 'What is the password?'\n{if} password {is} _\n    b = 'tomorrow at 02.00'\n{else}\n    b = 'today at 10.00'\n{print} _ _ _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conEvaluate",
            "conBranches"
          ]
        },
        "13": {
          "story_text": "We can simplify the superspy code with `{and}`, such that we only need one `{if}`.\n\n### Exercise 1\nComplete the code by filling the right command on the blank. Tip: The superspy has to answer BOTH questions correctly, before they get the confidential information!\n\n### Exercise 2\nWe want to confuse the enemy even more! Create a list with fake answers and select one at random when a wrong answer is given.\n",
          "example_code": "```\nname = {ask} 'What is your name?'\npassword = {ask} 'What is your password?'\n{if} name {is} 'Agent007' _ password {is} 'TOPSECRET'\n    {print} 'Go to the airport at 02.00'\n{else}\n    {print} 'Go to the trainstation at 10.00'\n ```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate",
            "conCombine"
          ]
        }
      }
    },
    "simon": {
      "name": "Simon Says",
      "default_save_name": "Simon",
      "description": "Make a game of Simon Says",
      "levels": {
        "16": {
          "story_text": "Let's make a game of Simon Says! Simon Says is a memory game in which the player will be given a color. They have to repeat that color back.\nIf they get it right a color is added to the sequence, so they now have to remember 2 colors, then 3, then 4 etc. the game stops as soon as the player makes a mistake.\n\n### Exercise\nIn this first part of the Simon Says adventure, we'll let the computer pick a random color and add it to a list.\n\n***Make 2 lists*** First, make a list called `colors` and fill it with the colors red, yellow, green and blue.\nThen make a list called `simon_sequence`. This list will be used as the answer.\nAt the start of the game this lists need to be empty. unfortunately, we can't create an empty list (yet), so we'll fill it with the words 'empty' and 'list' and we'll remove them from the list immediately.\n\n***Create a function that adds a color to the sequence*** Now that we have an empty list called simon_sequence, we can start filling it with random colors.\nWe do that with a function, so we can call it everytime there's a new level in our game. Create a function called `add_random_color`.\nThen create the variable random_color and set it to a random color. Next, add this random color to the simon_sequence.\n\n***Create a function that shows the simon_sequence*** Start by naming the new function `show_simon_sequence` with `level` as an argument. Now we want to show as many colors as the level we are in (in level 1 you see 1 color, in level 2 you see 2 colors etc).\nSo we repeat `level` times, to print the `simon_sequence[i]`. Each time a color is shown, wait for 1 second and then clear the screen.\n\n***Test your program*** Before you go to the next level, test if the functions are working by calling both of the functions. If they're working you should see a random color in your output screen.\nRemove this testing part of your code, copy the code and continue to the next adventure to learn more about the simon says game!\n",
          "example_code": "```\n# Make 2 lists\ncolors = _\n_ = ['empty', 'list']\n{remove} _ {from} simon_sequence\n{remove} _\n\n# Create a function that adds a color\n_ add_random_color\n    _\n    {add} _\n\n# Create a function that shows the simon_sequence\n{define} _\n    {for} i {in} {range} 1 {to} _\n        {print} _\n        _\n        _\n\n# Test your program\n{call} _\n{call} show_simon_sequence {with} 1\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqModify",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "simon_2": {
      "name": "Simon Says 2",
      "default_save_name": "Simon",
      "description": "Make a game of Simon Says",
      "levels": {
        "16": {
          "story_text": "We'll continue with our Simon Says game!\n\n### Exercise\n***Paste your code here*** Paste your code from the previous level here. Don't forget to remove the part that was just used for testing the functions.\n\n***Create a function that creates the player_sequence*** The list `player_sequence` is used to capture the answers of the player. First we define the function with the argument level.\nNext, we ask level times what the color is that they choose. We call that variable `answer`. Then we add the variable `answer` to the list player_sequence.\n\n***Setting up the game*** Before we program the game in the next adventure, we'll need some starting variables. First, we'll set the variable `level` to 1 and the variable `game_over` to False.\nThen we make an introduction for the game. We'll print 'Welcome to Simon Says!' and clear the screen after 1 second.\n\n***Continue to the next adventure to finish the game!**** Don't forget to copy your code and take it with you to the next adventure.\n",
          "example_code": "```\n# Paste your code here\n\n\n# Create a function that creates the player_sequence\n{define} _\n    {for} _\n        _ 'What is color number ' i '?'\n        {add} answer {to} _\n\n# Set up\nlevel = _\ngame_over = _\n{print} _\n_ 1\n_\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqModify",
            "repVariable",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "simon_3": {
      "name": "Simon Says 3",
      "default_save_name": "Simon",
      "description": "Make a game of Simon Says",
      "levels": {
        "16": {
          "story_text": "In this adventure we'll program the game of Simon Says!\n\n### Exercise\n***Paste your code*** Copy your code from the previous adventure and paste it here.\n\n***Program the game*** We start by making sure the game goes on while the game isn't over. Then we print what level the player is on, we use the variable level for that. We only show that for 1 second and then we clear the screen again.\nNow, we have to create the empty list player_sequence. We've already programmed how to fill the list, with our function `player_sequence`, but we never made the list itself. To create the list we use the same trick as we did in the previous tab.\nWe'll make a list with the words 'empty' and 'list' on it, and then we remove both these words. Next, we'll call all of the 3 functions that we've created.\nLastly, we'll have to check if the player gave the correct answers (so if the player_sequence and the simon_sequence are the same).\nIf that's the case, we'll compliment the player. Wait for 1 second and increase the level with 1.\nDid the player give the wrong answer, we'll tell them and end the game by setting game_over to 'True'\n\n***Enjoy your game!*** Great job! Does your game not work? Use the ladybug button to debug your code!\n",
          "example_code": "```\n# Paste your code here\n\n# The game\n{while} game_over _\n    {print} _\n    _\n    _\n    _ = ['empty', 'list']\n    {remove} _\n    {remove} _\n    {call} _\n    {call} _ {with} _\n    {call} _ {with} _\n    {if} player_sequence == _\n        _\n        _\n        _\n    {else}\n        _\n        game_over = _\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqModify",
            "repVariable",
            "repCondition",
            "conBranches",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "sleep_command": {
      "name": "{sleep}",
      "default_save_name": "sleep_command",
      "description": "introducing {sleep} command",
      "levels": {
        "2": {
          "story_text": "Another new command in this level is `{sleep}`, which pauses your program for a second. If you type a number behind the {sleep} command, the program pauses for that amount of seconds.\n\n### Exercise\nPractise this new command by making a code of your own in which you use the {sleep} command at least 3 times. With each {sleep} command the pausing time should differ.\n",
          "example_code": "```\n{print} My favorite colour is...\n{sleep} 2\n{print} green!\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        }
      }
    },
    "songs": {
      "name": "Sing a song!",
      "default_save_name": "Song",
      "description": "Print a song",
      "levels": {
        "6": {
          "story_text": "Songs often contain a lot of repetition. Sometimes the repetition is also based on counting.\nFor example, in the well-known song 'Bottles of beer'. You can program that song with a little math.\n\nTip: Use the read aloud function to let Hedy sing the song to you!\n\n### Exercise\nYou can now repeat lines 2 to 7 as many times as you want by copying the lines.\n",
          "example_code": "```\nverse = 99\n{print} verse ' bottles of beer on the wall'\n{print} verse ' bottles of beer'\n{print} 'Take one down, pass it around'\nverse = verse - 1\n{print} verse ' bottles of beer on the wall'\n{sleep}\n```\n",
          "story_text_2": "This children's song counts down from 5 little monkeys to 1 monkey.\nIf you copy line 2 - 7 and paste it under the the code, you can sing the whole song!\n",
          "example_code_2": "```\nnumber = 6\nnumber = number - 1\n{print} number ' little monkeys jumping on the bed'\n{print} 'One fell off and bumped his head'\n{print} 'Mama called the doctor and the doctor said'\n{print} 'NO MORE MONKEYS JUMPING ON THE BED!'\n{sleep}\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "7": {
          "story_text": "Songs often contain a lot of repetition. For example... Baby Shark! If you sing it, you keep singing the same thing:\n\nBaby Shark tututudutudu <br>\nBaby Shark tututudutudu <br>\nBaby Shark tututudutudu <br>\nBaby Shark\n\n### Exercise\nYou can print the song Baby Shark with a `{repeat}`? Finish the code by replacing the blanks?\n**Extra** After Baby Shark you can of course also program other songs. There are many songs with repetition!\nCan you think of one more song and print it?\n",
          "example_code": "```\n{repeat} _ _ {print} 'Baby Shark tututudutudu'\n{print} 'Baby Shark'\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "repCommands"
          ]
        },
        "8": {
          "story_text": "In a previous level you've programmed the song 'Bottles of beer'. But without the `{repeat}` command, you had to copy the verses many times.\nIn this level you can repeat the song 99 times, just by adding one simple line!\n\n### Exercise\nAdd the right command on the blanks and indent the code correctly.\n",
          "example_code": "```\nverse = 99\n_ 99 {times}\n{print} verse ' bottles of beer on the wall'\n{print} verse ' bottles of beer'\n{print} 'Take one down, pass it around'\nverse = verse - 1\n{print} verse ' bottles of beer on the wall'\n```\n",
          "learning_goals": [
            "seqModify",
            "repCommands"
          ]
        },
        "10": {
          "story_text": "With `{for}` you can print make the whole baby shark song (including all the other sharks in the family) in only 6 lines!\n\n### Exercise 1\nCan you make the baby shark code even shorter by using a `{for}` command? Finish the example code.\n",
          "example_code": "```\nfamily = baby, mammy, daddy, grandma, grandpa\n_ _ _ _ \n  {print} _\n```\n",
          "story_text_2": "### Exercise 2\nPrint the song Five little moneys jumping on the bed. Look up the text if you don't remember.\n\n**Extra** Print the song Old MacDonald had a farm, and make sure all animals make a different sound, using an `{if}`.\n",
          "example_code_2": "```\nmonkeys = 5, 4, 3, 2, 1\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "repVariable",
            "conEvaluate"
          ]
        },
        "11": {
          "story_text": "In this level you can use the `{for}` with `{range}` to make songs that use counting, like the 5 little monkeys.\n\n### Exercise 1\nFill in the blanks and make the code work! If you don't remember the song text, look it up yourself.\n\n### Exercise 2\nThe final line of the song is different from the others. Print this line inside the `{for}`, and use an `{if}` to make it work correctly.\n",
          "example_code": "```\n_ monkeys _ _ 5 _ 1\n    {print} monkeys ' little monkeys jumping on the bed'\n    _\n```\n",
          "learning_goals": [
            "seqProgram",
            "repCommands",
            "conEvaluate"
          ]
        },
        "12": {
          "story_text": "In this song we can make it even easier to program 'if you're happy and you know it, clap your hands'. Because we can put all of the actions in a variable, check it out:\n\n### Exercise\nCan you add the right amount of indentation to each line to make the song play correctly?\nHint: Not all lines need indentation.\n",
          "example_code": "```\n_ actions = 'clap your hands', 'stomp your feet', 'shout Hurray!'\n_ {for} action {in} actions\n_ {for} i {in} {range} 1 {to} 2\n_ {print} 'if youre happy and you know it'\n_ {print} action\n_ {print} 'if youre happy and you know it and you really want to show it'\n_ {print} 'if youre happy and you know it'\n_ {print} action\n```\n",
          "learning_goals": [
            "seqModify",
            "repNested"
          ]
        },
        "13": {
          "story_text": "In the previous adventure you have learned how to use an argument in a function, but did you know that you could combine them with {ask} commands as well?\nIn this example we have changed the 'My Bonnie' program and made it interactive. You are now asked where Bonnie is.\n",
          "example_code": "```\n{define} song {with} place\n    {print} 'My Bonnie is ' place\n\nchosen_place = {ask} 'Where do you want Bonnie to be?'\nsynonym = {ask} 'What is another word for that?'\n\n{call} song {with} chosen_place\n{call} song {with} synonym\n{call} song {with} chosen_place\n```\n",
          "learning_goals": [
            "seqInstructions",
            "decReused"
          ]
        },
        "16": {
          "story_text": "In this level, you can program a song like OldMacDonald even more quickly. You can connect the right animal to the right sound by simply putting them in the same place in the list.\nThe Drunken Sailor is also quickly made in this level. You only need 8 lines for the entire song, check it out!\n\n### Exercise\nComplete the Old MacDonald song by setting the variable `animal` to `animals[i]` and `sound` to `sounds[i]`.\n",
          "example_code": "```\nanimals = ['pig', 'dog', 'cow']\nsounds = ['oink', 'woof', 'moo']\n{for} i {in} {range} 1 {to} 3\n    animal = _\n    sound = _\n    {print} 'Old MacDonald had a farm'\n    {print} 'E I E I O!'\n    {print} 'and on that farm he had a ' animal\n    {print} 'E I E I O!'\n    {print} 'with a ' sound sound ' here'\n    {print} 'and a ' sound sound ' there'\n    {print} 'here a ' sound\n    {print} 'there a ' sound\n    {print} 'everywhere a ' sound sound\n```\n\n```\nlines = ['what shall we do with the drunken sailor', 'shave his belly with a rusty razor', 'put him in a long boat till hes sober']\n{for} line {in} lines\n    {for} i {in} {range} 1 {to} 3\n        {print} line\n    {print} 'early in the morning'\n    {for} i {in} {range} 1 {to} 3\n        {print} 'way hay and up she rises'\n    {print} 'early in the morning'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands"
          ]
        },
        "18": {
          "story_text": "In level 16 we made songs using lists. These programs however are no longer working properly in this level. The colons from level 17 and the brackets from level 18 still need to be added.\n\n### Exercise 1\nThe Drunken sailor song is given as sample code, but not yet working.\nCan you make sure everything works again? To help you, we've put _ in the places of _some_ errors.\n\n### Exercise 2\nNow also look up your Old MacDonald song from level 16, and correct it.\n",
          "example_code": "```\nlines = ['what shall we do with the drunken sailor', 'shave his belly with a rusty razor', 'put him in a long boat till hes sober']\n{for} line {in} lines _\n    {for} i {in} {range} 1 {to} 3 _\n        {print} _ line _\n    {print} 'early in the morning'\n    {for} i {in} {range} 1 {to} 3\n        {print} 'way hay and up she rises'\n    {print} 'early in the morning'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands",
            "repVariable",
            "debOutcome",
            "debIntermediate"
          ]
        }
      }
    },
    "songs_2": {
      "name": "Sing a song! 2",
      "default_save_name": "Song 2",
      "description": "Sing a song 2",
      "levels": {
        "12": {
          "story_text": "Songs contain a lot of repetition. We can capture it with a function!\n### Exercise\nLook at the example code with the function. Fill out the two lines so the full song is printed.\n",
          "example_code": "```\n{define} twinkle\n    {print} 'Twinkle'\n    {print} _\n\n{call} twinkle\n{print} 'Up above the world so high'\n{print} 'Like a diamond in the sky'\n{call} _\n```\n",
          "learning_goals": [
            "seqModify",
            "decSmaller"
          ]
        },
        "16": {
          "story_text": "### Exercise\nFinish the nursery rhyme!\n",
          "example_code": "```\nnumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']\nobject = ['on his drum', 'on his shoe', 'on his knee', 'on his door', 'on his hive', 'on his sticks', 'up in heaven', 'on his gate', 'on his vine', 'once again']\n\n_\n    {print} 'This old man'\n    {print} 'He played ' _\n    {print} 'He played knick-knack ' _\n    {print} 'With a knick-knack paddywhack'\n    {print} 'Give the dog a bone'\n    {print} 'This old man came rolling home'\n    {sleep} 8\n    {clear}\n```\n",
          "story_text_2": "### Exersice 2\nNow create your own code for the nursery rhyme 'The wheels on the bus' on the same way!\n",
          "example_code_2": "```\nobject = ['wheels', 'doors', _]\nmovement = [ 'round and round', 'open and shut', _]\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder",
            "repCommands"
          ]
        }
      }
    },
    "tic": {
      "name": "Tic-Tac-Toe",
      "default_save_name": "Tic",
      "description": "Play a game of Tic Tac Toe!",
      "levels": {
        "16": {
          "story_text": "Let's program a game of tic-tac-toe!\n\n### Exercise\nIn this adventure we'll start with creating an empty field.\n\n***Create a list called field*** This list will be our playing field. This list is filled with 9 dots, since there are no x's and o's yet at the start of our game.\n\n***Create a function that prints the field*** Firstly, clear the screen so the old playing fields will be removed. Then we print the first line of our Tic Tac Toe field. This line constists of the first 3 spots in our list field.\nWe have already programmed this line for you. Now finish the field by printing spot 4, 5, and 6 on the second row and spot 7, 8 and 9 in the third row.\n\n***Call the function that prints the field*** Now call the function.\n<div class=\"w-full flex flex-row gap-2\">\n    Run the code. Your output should look like this: <img src=\"https://github.com/hedyorg/hedy/assets/80678586/bcbd156e-4b48-4e82-84ae-f86d21b0cbcc\" width=\"100\">\n</div>\n\n***Continue in the next adventure*** In the next adventure you'll learn how to program the game itself.\n",
          "example_code": "```\n# Create a list called field\n_ = ['.', '.', '.', '.', '.', '.', '.', '.', '.']\n\n# Create a function that prints the field\n{define} print_field\n    _\n    {print} 'TIC TAC TOE'\n    {print} field[1] field[2] field[3]\n    _\n    _\n\n# Call the function\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqModify",
            "decSmaller"
          ]
        },
        "17": {
          "story_text": "In the previous level you've learned how to make a tic-tac-toe game. The game works, but is quite annoying as it keeps asking you if you've won yet.\nNow that we have the {elif} command, we can let the game decide if someone has won and it can stop asking us!\n\n### Exercise\n***Paste your code*** Paste your code from the previous level here and make it level 17 proof. In this level you've learned to use a colon everytime you create a block of code. Please add the colons in the correct spots.\n\n***Create a function that detects if someone's won*** We have started the function for you, paste it under the function `print_field` and finish the function. You can see that this first piece of code checks to see if spot 1, 2 and 3 are the same, because if they are you have 3 in a row.\nIt also checks if they are not a dot, because if they are, the line might have the same symbols on them, but that's just because it's still empty.\nIf all these conditions are met, the game is over and the winner is printed.\nFinish this function with all possible ways to win. This means you have to make this for the other 2 rows, 3 columns and 2 diagonals.\nIf you've finished all the other options, the function should return the variable `game_over` so we can use it in our game.\n\n***Call the function in the game*** Go to the line `game_over = {ask} 'Did you win?'` and change it to `game_over = {call} detect_winner {with} field, sign`. Now the function will check if there's a winner and the game doesn't need to keep asking anymore!\n\n***Enjoy your game!*** Great job! You have finished the game! Enjoy playing it!\n",
          "example_code": "```\n# Paste your code here and make it level 17 proof\n\n# Create a function that detects if someone has won\n{define} detect_winner {with} field, sign:\n    {if} field[1] == field[2] {and} field[2] == field[3] {and} field[1] != '.':\n        game_over = 'yes'\n        {print} 'Player ' sign 'wins!'\n    {elif}:\n        _\n    {else}:\n        game_over = 'no'\n{return} _\n```\n",
          "learning_goals": [
            "conBranches",
            "conCombine",
            "decSmaller"
          ]
        }
      }
    },
    "tic_2": {
      "name": "Tic-Tac-Toe 2",
      "default_save_name": "Tic",
      "description": "Play a game of Tic Tac Toe!",
      "levels": {
        "16": {
          "story_text": "In the previous adventure you've learned how to create a playing field. Now you'll learn how to create the game!\n\n### Exercise\n***Paste your code*** Start by pasting your code from the previous adventure here.\n\n***Add variables*** Underneath your list called `field` we'll add 2 more variables that we'll need to program the game.\nThe variable `game_over` tells us if the game is over, and should be 'no' at the start of the game.\nThe variable `sign` tells us if it's the turn of player x or player o. Set the variable to 'x'.\n\n***The game*** First use a {while} command, to make sure the game keeps on playing the variable while game_over is set to no.\nDuring the game, we first ask the player which spot they choose. Then we change the field with the number they chose into their sign.\nThen we print the field again and we ask the player if they've won yet. Lastly we want to switch whose turn it is, so if the sign is 'x' it should be 'o' and the other way around.\n\n***Test your game*** Does your game work? Great, have fun playing the game! If not, use the ladybug button to debug your code.\nYou might have noticed one mistake in the code though, you can steal the other player's spot! If the other person chose spot 1, you could simply enter 1 after them and steal their spot.\nThat's not fair! Go to the next adventure to learn how to fix this problem.\n",
          "example_code": "```\n# Paste your code from the previous adventure here\n\n# Add variables\ngame_over = _\nsign = _\n\n# The game\n{while} _\n    choice = _ 'Player ' sign '_?'\n    field[choice] = _\n    _ print_field\n    game_over = {ask} _\n    {if} sign = 'o'\n        sign = _\n    _\n        sign = _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqModify",
            "repVariable",
            "repCondition",
            "conBranches",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "tic_3": {
      "name": "Tic-Tac-Toe 3",
      "default_save_name": "Tic",
      "description": "Play a game of Tic Tac Toe!",
      "levels": {
        "16": {
          "story_text": "You might have noticed one mistake in the code you've made in the previous adventure. You can steal the other player's spot! If the other person chose spot 1, you could simply enter 1 after them and steal their spot.\nThat's not fair! In this adventure we'll fix that mistake.\n\n### Exercise\n***Paste your code here*** Paste your code from the previous adventure here.\n\n***Fix the mistake*** To fix the mistake we replace the line that says `field[choice] = sign`. This turns any spot that the player has chosen into their sign.\nGo to the header that says 'Use this to fix the mistake' and finish the code. We first want to check if the chosen spot is still empty, so `if field[choice] = '.'`. If that is the case, you are allowed to take it.\nThen we make an else command and print 'Sorry, this spot is already taken' if the spot is not empty. Lastly, we add a {sleep} command, so the players can actually read the text before it gets cleared again.\nNow copy this piece of code and replace the line `field[choice] = sign` with this new piece of code.\n\n***Play your game!*** Now the game should work properly! Good job!\nThe only flaw is that you can get a bit annoyed that the game keeps asking you if you've won yet. Do you want to fix that? Go to level 17 and we'll fix it!\n",
          "example_code": "```\n# Paste your code here\n\n# Use this to fix the mistake\n{if} _ = '.'\n    field[choice] = sign\n{else}\n    {print} _\n    _\n```\n",
          "learning_goals": [
            "seqInstructions",
            "conEvaluate",
            "conBranches"
          ]
        }
      }
    },
    "turtle": {
      "name": "Turtle",
      "default_save_name": "Turtle",
      "description": "Make your own drawing",
      "levels": {
        "1": {
          "story_text": "You can also use Hedy to draw. By combining turns and lines, you can make a square or stairs!\n\nUsing `{forward}` you draw a line forwards. The number behind it determines how far the turtle will walk. `{turn} {right}` turns a quarter turn in clockwise direction, `{turn} {left}` turns counter clockwise.\n\nIf you want to go backwards, you use the `{forward}` command but with a negative number. So for example `{forward} -100`\n",
          "example_code": "```\n{forward} 100\n{turn} {left}\n```\n",
          "story_text_2": "### Exercise\nThis is the start of a little staircase. Can you make it have 5 steps?\n",
          "example_code_2": "```\n{forward} 20\n{turn} {right}\n{forward} 20\n{turn} {left}\n{forward} 20\n```\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "In level 1 the turtle could only turn left or right. That is a bit boring!\nIn level 2 he can point his nose in all directions. \n\nUse 90 degrees to turn a quarter, 180 to turn half, and a full circle is 360 degrees.\n\n### Exercise\nThis code now creates the letter T. Can you change it to make the letter B?\n\n**Extra** Change the letter into a different letter, like the first one of your name. \nYou can also make multiple letters, by setting the color to `{color}` `{white}` in between. \n",
          "example_code": "```\n{forward} 80\n{turn} 90\n{forward} 50\n{turn} 180\n{forward} 100\n```\n",
          "story_text_2": "You can use variables to in the turtle `turn`. \n\n### Exercise\nChange the code such that it creates a triangle. Hint: you only have to change the code in one place.\n",
          "example_code_2": "```\n{print} Drawing figures\nangle {is} 90\n{turn} angle\n{forward} 25\n{turn} angle\n{forward} 25\n{turn} angle\n{forward} 25\n```\n",
          "learning_goals": [
            "seqProgram",
            "seqOrder"
          ]
        },
        "3": {
          "story_text": "In this level you can use `{at} {random}` with the drawing turtle. A random choice makes the turtle walk a different path each time.\nUse `{at} {random}` to choose a value from a list.\n### Exercise\nCan you copy and paste lines 2 and 3 to create a longer random path?\n",
          "example_code": "```\nangles {is} 10, 50, 90, 150, 250\n{turn} angles {at} {random}\n{forward} 25\n```\n",
          "learning_goals": [
            "seqProgram"
          ]
        },
        "4": {
          "story_text": "In level 4 you have to use quotation marks with `{print}` and `{ask}`. Also when drawing!\n",
          "example_code": "```\n{print} _ Drawing figures _\nangle {is} 90\n{turn} angle\n{forward} 25\n{turn} angle\n{forward} 25\n```\n",
          "story_text_2": "You can also change the color of the lines with the command `{color}`. Check out the example.\nYou can also use the command `{color} {white}` to make 'invisible' lines. You could use these white lines to move the turtle anywhere in the screen before you start drawing.\n",
          "example_code_2": "```\n{color} {white}\n{forward} -80\n{color} {green}\n{forward} 50\n{color} {yellow}\n{forward} 50\n{color} {red}\n{forward} 50\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "5": {
          "story_text": "In level 5 you can make a choice with `{if}`. For example between different types of figures.\n",
          "example_code": "```\n{print} 'Drawing Figures'\nfigure {is} {ask} 'Do you want a square or a triangle?'\n{if} figure {is} triangle angle {is} 120\n{else} angle {is} 90\n{turn} angle\n{forward} 25\n{turn} angle\n{forward} 25\n{turn} angle\n{forward} 25\n{turn} angle\n{forward} 25\n```\n",
          "story_text_2": "### Exercise\nFill in the correct numbers in this code to get it to work.\nAfter you've done that, you can try to add the option backwards.\n\n**Extra** Instead of using 'left' and 'right', remake the program with North, East, South and West.\nThis way you could add even more directions like Northeast and Southwest etc.\n",
          "example_code_2": "```\ndirection {is} {ask} 'Do you want to go left, right, or straight ahead?'\n{if} direction {is} left {turn} _\n{if} direction {is} right {turn} _\n{forward} 100\n```\n",
          "learning_goals": [
            "seqProgram",
            "conEvaluate"
          ]
        },
        "6": {
          "story_text": "In this level you can use calculations to draw different figures.\nYou may have learned in school that turning a full circle is 360 degrees. If not, now you know!\nThat's why you also use 90 degrees for a square. 360 divided by 4 is 90.\nNow that we can do math with Hedy, we can draw all the figures we want!\n",
          "example_code": "```\nangles = {ask} 'How many angles do you want?'\nangle = 360 / angles\n{forward} 50\n{turn} angle\n{forward} 50\n{turn} angle\n{forward} 50\n{turn} angle\n{forward} 50\n{turn} angle\n{forward} 50\n{turn} angle\n{forward} 50\n{turn} angle\n```\n",
          "learning_goals": [
            "seqInstructions"
          ]
        },
        "8": {
          "story_text": "Now that we can repeat several lines, we can make figures more easily.\nWe only have to set the angle once and then use that variable in the `{repeat}`.\n\n### Exercise 1\nThe example code creates a square. Change the code so that it create another figure, such as a triangle or a hexagon. \nThis requires a change to two lines of code.\nTip: An entire circle is 360 degrees.\n\n### Exercise 2\nNow create a drawing consisting of at least two polygons.\n",
          "example_code": "```\nangle = 90\n{repeat} 4 {times}\n    {turn} angle\n    {forward} 50\n```\n",
          "story_text_2": "**Extra** We can now improve the program that draws different figures. Finish the code and you can draw any polygon you'd like!\n",
          "example_code_2": "```\nfigure = {ask} 'How many angles should I draw?'\nangle = 360 / figure\n{repeat} figure {times}\n    {turn} _\n    {forward} _\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands"
          ]
        },
        "9": {
          "story_text": "Now that we can use a `{repeat}` inside a `{repeat}`, we can create more complex figures.\n\n### Exercise 1\nThis code creates three black triangles, change that into five pink squares.\n\n **Extra** Create a figure of your own choosing consisting of at least two different shapes types.\n",
          "example_code": "```\n{color} {black}\n{repeat} 3 {times}\n    {repeat} 3 {times}\n        {forward} 10\n        {turn} 120\n    {color} {white}\n    {forward} 50\n    {color} {black}\n```\n",
          "learning_goals": [
            "seqModify",
            "repCommands",
            "repNested"
          ]
        },
        "10": {
          "story_text": "In this level you can make the turtle draw a figure.\nThe turtle will travel the distances in the list, one by one, making bigger and bigger steps.\n### Exercise 1\nAdd a 90 degree turn in the loop, so that a spiral is drawn.\nAdd at least 5 numbers to the list, so the spiral grows larger.\n**(extra)** can you change the spiral into another shape? Experiment with numbers for the turn!\n### Exercise 2\nThe spiral is drawn outwards, make it go inwards?\n",
          "example_code": "```\n{turn} 90\ndistances = 10, 20, 30, 40, 50, 60\n{for} distance {in} distances\n    {forward} distance\n```\n",
          "learning_goals": [
            "repVariable"
          ]
        },
        "12": {
          "story_text": "We can use functions to draw more complex figures with less code.\n### Exercise 1\nFill the function so that three squares are created. If you want the image to look nicer, you can make the lines between the squares white.\n\n### Exercise 2\nThe code can be made even shorter. Place the final lines into a `{repeat}` so the figure remains the same.\n\n### Exercise 3\nCreate your own drawing with different figures.\nChange both the number of figures with the `{repeat}` and the shape of the figures in the `{define}`\n",
          "example_code": "```\n{define} square\n    {repeat} 4 {times}\n        {turn} _\n        {forward} _\n{call} square\n{forward} 50\n{call} square\n{forward} 50\n{call} square\n```\n",
          "learning_goals": [
            "seqModify",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "turtle_draw_it": {
      "name": "Draw it!",
      "default_save_name": "Draw it",
      "description": "Draw this picture with the turtle",
      "levels": {
        "1": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n<div class=\"w-full flex flex-row gap-2\">\n    Rectangle <img src=\"https://github.com/hedyorg/hedy/assets/80678586/77aa99d5-cd8f-4969-b49d-e8fed34ac550\" width=\"100\">\n    Square <img src=\"https://github.com/hedyorg/hedy/assets/80678586/03b96c2c-7b94-4032-9f9f-3f3b13573623\" width=\"200\">\n    Stairs<img src=\"https://github.com/hedyorg/hedy/assets/80678586/d4301e62-ec66-4031-827c-7d21f73ba106\" width=\"200\">\n</div>\n",
          "learning_goals": [
            "seqInstructions",
            "seqProgram",
            "seqOrder"
          ]
        },
        "2": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n<div class=\"w-full flex flex-row gap-2\">\nTriangle <img src=\"https://github.com/hedyorg/hedy/assets/80678586/e974b62c-f0cf-445a-8bd4-5ad9f1f71204\" width=\"100\">\nArrow <img src=\"https://github.com/hedyorg/hedy/assets/80678586/803d8f42-9708-448c-82ea-d035697f08c9\" width=\"150\">\nBoat <img src=\"https://github.com/hedyorg/hedy/assets/80678586/94ef7189-442a-4c8f-827d-12a69203c2e9\" width=\"150\">\n</div>\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "3": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n<div class=\"w-full flex flex-row gap-2\">\nTriangle <img src=\"https://github.com/hedyorg/hedy/assets/80678586/71e04d98-9545-4614-9caf-a5f179b756a1\" width=\"150\">\nStar <img src=\"https://github.com/hedyorg/hedy/assets/80678586/421c4d28-cb99-424b-be26-dcae30d65c80\" width=\"150\">\nArrow <img src=\"https://github.com/hedyorg/hedy/assets/80678586/3cbebcae-5258-47c5-a6ac-e7ee36c1d1ce\" width=\"200\">\n</div>\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "4": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n<div class=\"w-full flex flex-row gap-2\">\nColored Star <img src=\"https://github.com/hedyorg/hedy/assets/80678586/dbe39006-c050-4833-b5c4-f9d1fb1c0781\" width=\"150\">\nRainbow <img src=\"https://github.com/hedyorg/hedy/assets/80678586/2728b10f-9f7f-45ea-964e-5b284033e4f0\" width=\"500\">\nNested squares <img src=\"https://github.com/hedyorg/hedy/assets/80678586/f013f9fa-bc68-4c60-b778-2c457799d6f7\" width=\"200\">\n</div>\n",
          "example_code": "**Extra** Up for a real challenge? Make sure that the colors of these figures are selected randomly, so that each time you run your programs they'll look differently!\n\n```\ncolors {is} red, orange, yellow, green, blue, purple, pink, brown, gray, black\ncolor _\n```\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "5": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n**Extra** Make only one code that lets the player decide which letter they'd like to see! And can you add even more letters?\n\n<div class=\"w-full flex flex-row gap-2\">\nF <img src=\"https://github.com/hedyorg/hedy/assets/80678586/8a021b76-c24b-4e7c-b960-48d57f3bcb20\" width=\"100\">\nE <img src=\"https://github.com/hedyorg/hedy/assets/80678586/12821803-6422-416a-8e36-9902d14e57a4\" width=\"100\">\nL <img src=\"https://github.com/hedyorg/hedy/assets/80678586/3af6f919-7b67-4ee7-b923-11e56f2b6b24\" width=\"100\">\n</div>\n",
          "example_code": "Hint:\n```\nchosen_letter {is} {ask} 'Which letter would you like to see? F, E or L?'\n{if} _\n```\n",
          "learning_goals": [
            "seqOrder",
            "conEvaluate"
          ]
        },
        "6": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n**Extra** Let the player decide which color the square should be.\n\n***Extra*** Can you make the letter of your own first name and the flag of your own country too?\n\n<div class=\"w-full flex flex-row gap-2\">\nSquare <img src=\"https://github.com/hedyorg/hedy/assets/80678586/03b96c2c-7b94-4032-9f9f-3f3b13573623\" width=\"150\">\nLetters <img src=\"https://github.com/hedyorg/hedy/assets/80678586/e75f4fa5-f1f5-4b48-806c-916c28e4e8ad\" width=\"100\">\nFlag <img src=\"https://github.com/hedyorg/hedy/assets/80678586/877fc337-df80-4185-8005-a6c28904f66e\" width=\"300\">\n</div>\n",
          "example_code": "Hint for the square:\n```\nchosen_color = {ask} _\n```\n",
          "learning_goals": [
            "seqOrder"
          ]
        },
        "7": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n<div class=\"w-full flex flex-row gap-2\">\nHexagon <img src=\"https://github.com/hedyorg/hedy/assets/80678586/92e492e1-1593-489b-aaf0-51d2a29755f4\" width=\"200\">\nTriangle <img src=\"https://github.com/hedyorg/hedy/assets/80678586/3629a5e6-1f02-4851-aab9-c5430ba4a1f1\" width=\"200\">\nFan <img src=\"https://github.com/hedyorg/hedy/assets/80678586/1ba2ff71-1230-4fe3-8255-b2c504cf1b4e\" width=\"200\">\n</div>\n",
          "learning_goals": [
            "seqOrder",
            "repCommands"
          ]
        },
        "8": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n**Extra** The number in brackets indicates in how many lines of code this figure can be drawn. Can you do it in the same amount of lines?\n\n<div class=\"w-full flex flex-row gap-2\">\nSquare (3) <img src=\"https://github.com/hedyorg/hedy/assets/80678586/03b96c2c-7b94-4032-9f9f-3f3b13573623\" width=\"200\">\nRandomly colored star (5) <img src=\"https://github.com/hedyorg/hedy/assets/80678586/dbe39006-c050-4833-b5c4-f9d1fb1c0781\" width=\"150\">\nRandomly colored spiral (7) <img src=\"https://github.com/hedyorg/hedy/assets/80678586/9bcdb3f1-367d-4ae0-878f-d09005424a35\" width=\"150\">\n</div>\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands"
          ]
        },
        "9": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n**Extra** The number in brackets indicates in how many lines of code this figure can be drawn. Can you do it in the same amount of lines?\n\n**Extra** Give the player a choice which country they would like to see the flag of.\n\n<div class=\"w-full flex flex-row gap-2\">\nCross (7) <img src=\"https://github.com/hedyorg/hedy/assets/80678586/76e42c76-aa3f-4863-8eee-ead73c09a186\" width=\"150\">\nRandomly colored nested squares (8) <img src=\"https://github.com/hedyorg/hedy/assets/80678586/17f878cc-e893-4c10-b32e-a09a50bf08de\" width=\"200\">\nFlags <img src=\"https://github.com/hedyorg/hedy/assets/80678586/877fc337-df80-4185-8005-a6c28904f66e\" width=\"300\">\n</div>\n",
          "example_code": "Hint for the nested squares:\n```\ncolors = red, blue, orange, yellow, pink, purple, green, brown, black\ndistance = 120\n{repeat} 5 {times}\n_\n```\nHint for the flags:\n```\ncountry = {ask} 'which country would you like to see the flag of?'\n{if} country {is} 'the Netherlands'\n    color_1 = red\n    color_2 = white\n    color_3 = blue\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "repNested",
            "conEvaluate",
            "conBranches"
          ]
        },
        "10": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n<div class=\"w-full flex flex-row gap-2\">\nNested Hexagon <img src=\"https://github.com/hedyorg/hedy/assets/80678586/3629e908-3cd5-44ac-bbcd-1f1cceb15654\" width=\"150\">\nTraffic lights  <img src=\"https://github.com/hedyorg/hedy/assets/80678586/edbbb608-5ff8-4349-85a6-e47809adde43\" width=\"100\">\n</div>\n",
          "example_code": "Hint Nested Hexagon:\n```\ndistances = 100, 80, 60, 40, 20\n{for} distance {in} distances\n_\n```\n\nHint Traffic Lights:\n```\ncolors = red, yellow, green\n{for} chosen_color {in} colors\n    {color} _\n    {repeat} _\n```\n",
          "story_text_2": "Christmas lights <img src=\"https://github.com/hedyorg/hedy/assets/80678586/9637ea6d-6edc-4d88-a6f7-10271bfc5371\" width=\"500\">\n",
          "example_code_2": "Hint Christmas Lights:\n\nStart by moving to the left side of the screen with an invisible white line. Then hang up the Christmas lights!\n```\n{color} white\n{turn} -90\n{forward} 300\n{turn} 90\n\ncolors = red, blue, yellow, purple, green, orange, pink\n{for} chosen_color {in} colors\n_\n```\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "repVariable"
          ]
        },
        "11": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\n<div class=\"w-full flex flex-row gap-2\">\nBeehive (6) <img src=\"https://github.com/hedyorg/hedy/assets/80678586/ec02469c-907b-4695-9382-d39a8f3c00ec\" width=\"150\">\nFan (5)  <img src=\"https://github.com/hedyorg/hedy/assets/80678586/a032ab35-c70c-4e67-9b4e-036a03ecce87\" width=\"150\">\nSnowflake (13) <img src=\"https://github.com/hedyorg/hedy/assets/80678586/90f56bbb-86e5-448d-8aec-16f8c2c05cf2\" width=\"150\">\n</div>\n",
          "example_code": "Hint Beehive:\n```\n{for} amount_of_combs {in} {range} 1 {to} _\n    {for} walls_of_one_comb {in} {range} 1 {to} _\n        {forward} _\n        {turn} _\n    {forward} _\n    {turn} _\n```\n\nHint Fan:\nStart out like the fan you made in level 7. Or take a peak at the hint for the beehive, because the codes are very similar.\n\nHint Snowflake: Start by making one 'leg' and repeat it 6 times.\n",
          "learning_goals": [
            "seqOrder",
            "seqModify",
            "repCommands",
            "repNested"
          ]
        },
        "12": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\nFirstly, define a function **for each shape** you want to use on the bracelet. Then, add the shapes to the bracelet like this:\n\nBracelet Designing program <img src=\"https://github.com/hedyorg/hedy/assets/80678586/549d7f3a-c492-4b4a-b173-746eb3400951\" width=\"500\"> \n",
          "example_code": "Hint Bracelet Designing program\n```\n{define} draw_a_square\n_\n\n{color} white\n{turn} -90\n{forward} 300\n{turn} 180\n\n{for} i {in} {range} 1 {to} 5\n    {color} gray\n    {forward} 100\n    shape = {ask} 'What kind of shape would you like next on the bracelet?'\n    chosen_color = {ask} 'In which color?'\n    {color} chosen_color\n    {if} shape = 'square'\n        {call} draw_a_square\n```\n",
          "learning_goals": [
            "seqModify",
            "repCommands",
            "conEvaluate",
            "decSmaller",
            "decReused"
          ]
        },
        "13": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\nStreet in different sizes <img src=\"https://github.com/hedyorg/hedy/assets/80678586/cdae9d97-d5ef-46f3-8838-24fa7b5b1bec\" width=\"300\">\nColored street  <img src=\"https://github.com/hedyorg/hedy/assets/80678586/9893e0bd-c0f8-49bc-a5a7-217182407724\" width=\"300\">\nSnow Storm <img src=\"https://github.com/hedyorg/hedy/assets/80678586/111b0a1b-b0e1-47c3-b032-81cea05e6bbc\" width=\"300\">\n",
          "example_code": "Hint Street in different sizes\n```\n{define} draw_a_house {with} size\n_\n\n{call} draw_a_house {with} 90\n{call} draw_a_house {with} 60\n{call} draw_a_house {with} 30\n```\n\nHint Colored street\n```\n{define} draw_a_house {with} chosen_color\n_\n```\n\nHint Snow Storm\n```\n{define} draw_snowflake {with} length, color\n    _\n\nnumbers = 10, 20, 30\ncolors = _\n\n{for} i {in} {range} 1 {to} 5\n    random_number = _\n    random_color = _\n    {call} draw_snowflake {with} random_number, random_color\n    {color} white\n    {turn} random_number * 5\n    {forward} 80\n```\n",
          "learning_goals": [
            "seqModify",
            "repCommands",
            "decReused"
          ]
        },
        "14": {
          "story_text": "### Exercise\nCreate a program that asks the player how many corners their figure should have and then creates that figure.\nThe figure in the image is the output when the player fills in 10.\n\n<div class=\"w-full flex flex-row gap-2\">\n <img src=\"https://github.com/hedyorg/hedy/assets/80678586/ee32f40e-dea1-4e7c-a813-3ef63671254b\" width=\"300\">\n <img src=\"https://github.com/hedyorg/hedy/assets/80678586/3621bf77-527d-41e8-a44f-c5a21bb4ffd2\" width=\"200\">\n</div>\n",
          "example_code": "```\n{define} calculate_degrees {with} amount_of_corners\n    _ 360 / amount_of_corners\n\n\n{define} draw_figure {with} degrees\n    _\n        {forward} 400/amount_of_corners\n        {turn} _\n\namount_of_corners = {ask} _\ndegrees = {call} _ {with} _\n\n{call} _ {with}\n{call} _ {with}\n```\n",
          "learning_goals": [
            "seqProgram",
            "decSmaller",
            "decReused"
          ]
        },
        "15": {
          "story_text": "### Exercise\nRecreate the drawings with the turtle!\n\nSpiral <img src=\"https://github.com/hedyorg/hedy/assets/80678586/6943223c-018b-435b-a391-23723cc7a6ad\" width=\"150\">\n",
          "example_code": "Spiral\n```\ndistance = 5\n{while} distance < 200\n    distance = distance + 5\n     _\n```\n",
          "story_text_2": "Fan <img src=\"https://github.com/hedyorg/hedy/assets/80678586/cb671065-b47b-49f0-b298-dcbcd2a5e28f\" width=\"150\">\n",
          "example_code_2": "Fan\n```\n{define} draw_a_square {with} side\n_\n\ni = 100\n{while} i > 1\n    _ {with} i\n    _\n    i = i - 3\n```\n",
          "story_text_3": "Star <img src=\"https://github.com/hedyorg/hedy/assets/80678586/17564e0a-63e1-4794-8d41-15ac8c1a5a93\" width=\"150\">\n",
          "example_code_3": "Star\nA star is usually drawn using 144-degree-turns. If you change this slightly to 143 degrees for example and repeat the pattern multiple times with a {while} loop you can make this figure.\n",
          "learning_goals": [
            "seqModify",
            "repVariable",
            "repCondition",
            "decSmaller",
            "decReused"
          ]
        }
      }
    },
    "while_command": {
      "name": "{while}",
      "default_save_name": "while_command",
      "description": "{while}",
      "levels": {
        "15": {
          "story_text": "We are going to learn a new loop, the `{while}` loop! We continue the loop as long as the statement is true.\nSo don't forget to change the value in the loop.\n\nIn the example code, we continue until a correct answer has been given.\nIf the correct answer is never given, the loop never ends!",
          "example_code": "```\nanswer = 0\n{while} answer != 25\n    answer = {ask} 'What is 5 times 5?'\n{print} 'A correct answer has been given'\n```\n",
          "learning_goals": [
            "repCondition"
          ]
        }
      }
    },
    "years": {
      "name": "New Year's",
      "default_save_name": "New Year's Countdown",
      "description": "Countdown to the New Year!",
      "levels": {
        "11": {
          "story_text": "In this level you can use the `{for}` number `{in}` `{range}` command to countdown to the New Year.\n\n### Exercise\nFill in the blanks and make the code work!\n",
          "example_code": "```\n{for} number {in} {range} _ {to} _\n    {print} number\n    {sleep}\n{print} 'Happy New Year!'\n```\n",
          "learning_goals": [
            "seqInstructions",
            "repCommands"
          ]
        }
      }
    }
  }
}