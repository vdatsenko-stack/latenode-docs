# Comparisons

Article Description: Performing logical comparisons for decision-making in automation.
Published: Yes
Suggested: No

<aside>
💡 You can use our GPT Assistant for help with **Latenode operators**:

👉 [**Latenode Operators Assistant**](https://chatgpt.com/g/g-67d704425c088191b741075e2b0f9815-latenode-operators-assistant)

It can guide you on writing expressions, using variables, filters, and building logic inside your scenarios.

</aside>

## Algorithm

Operators in this group compare operands with each other. The operands can be:

- Numerical values - their mathematical relationship is determined during comparison;
- String values - comparison is done character by character. If the first characters of two strings are equal, the second characters are compared, and so on. Comparison determines the lexicographic order of characters, i.e., their order in the alphabet.

<aside>
💡 An uppercase letter is considered different from its lowercase counterpart. When comparing, a lowercase letter is considered greater than the corresponding uppercase letter. The presence of a character is considered a greater value than the absence of a character.

</aside>

## Result

The result of the expression is a Boolean value, either TRUE or FALSE.

## Examples

## **<**

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled.png)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 45** and **3.ValueSV2 = 100**, then it's **TRUE**.
- If the operand types are **numbers**, and for example, **3.ValueSV1 = 125** and **3.ValueSV2 = 125**, then it's **FALSE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = AA** and **3.ValueSV2 = AB**, then it's **TRUE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = AC** and **3.ValueSV2 = AB**, then it's **FALSE**.

## **≤**

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled%201.png)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 5** and **3.ValueSV2 = 5**, then it's **TRUE**.
- If the operand types are **numbers**, and for example, **3.ValueSV1 = 5** and **3.ValueSV2 = 1**, then it's **FALSE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = AB** and **3.ValueSV2 = AB**, then it's **TRUE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = AB** and **3.ValueSV2 = AA**, then it's **FALSE**.

## =

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled%202.png)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 15** and **3.ValueSV2 = 15**, then it's **TRUE**.
- If the operand types are **numbers**, and for example, **3.ValueSV1 = 15** and **3.ValueSV2 = 20**, then it's **FALSE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = ABC** and **3.ValueSV2 = ABC**, then it's **TRUE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = ABC** and **3.ValueSV2 = ABCD**, then it's **FALSE**.

## ≠

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled%203.png)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 50** and **3.ValueSV2 = 51**, then it's **TRUE**.
- If the operand types are **numbers**, and for example, **3.ValueSV1 = 50** and **3.ValueSV2 = 50**, then it's **FALSE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = AA** and **3.ValueSV2 = B**, then it's **TRUE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = BB** and **3.ValueSV2 = BB**, then it's **FALSE**.

## ≥

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled%204.png)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 125** and **3.ValueSV2 = 100**, then it's **TRUE**.
- If the operand types are **numbers**, and for example, **3.ValueSV1 = 45** and **3.ValueSV2 = 100**, then it's **FALSE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = BC** and **3.ValueSV2 = BC**, then it's **TRUE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = BA** and **3.ValueSV2 = BB**, then it's **FALSE**.

## >

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled%205.png)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 125** and **3.ValueSV2 = 100**, then it's **TRUE**.
- If the operand types are **numbers**, and for example, **3.ValueSV1 = 45** and **3.ValueSV2 = 100**, then it's **FALSE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = BBA** and **3.ValueSV2 = BB**, then it's **TRUE**.
- If the operand types are **strings**, and for example, **3.ValueSV1 = BB** and **3.ValueSV2 = BC**, then it's **FALSE**.

## AND

The AND operator evaluates all of its operands. If the result of the evaluation is FALSE for at least one operand, the expression's result is also FALSE.

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled%206.png)

- If 1.body.ValueWH = 71 AND 3.ValueSV = 100, then **TRUE**;
- If 1.body.ValueWH = 70 AND 3.ValueSV = 100, then **FALSE**.

## OR

The OR operator evaluates all of its operands. If the result of the evaluation is TRUE for at least one operand, the expression's result is also TRUE.

![Untitled](Comparisons%2019157d45a06780298033f23d275a1937/Untitled%207.png)

- If 1.body.ValueWH = 70 OR 3.ValueSV = 100, then **TRUE**;
- If 1.body.ValueWH = 70 OR 3.ValueSV = 99, then **FALSE**.