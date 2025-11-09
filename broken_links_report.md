# Отчет о битых ссылках на /introduction/ (стартовую страницу)

## Найденные ссылки на корневой introduction.md в папке docs/

Все эти ссылки ведут на `docs/introduction.md` (стартовую страницу), но должны вести на конкретные статьи или разделы.

---

### 1. docs/white_label/user_authorization.md
**Строка:** 54  
**Текущая ссылка:** `[configure](../introduction.md)`  
**Правильный путь:** Не определен (возможно, ссылка на SDK документацию или API)  
**Контекст:** 
```
Creating a JWT token is sufficient to register or authorize a user on the Latenode platform. Use this token in the [`configure`](../introduction.md) sdk method.
```

---

### 2. docs/integrations/custom_nodes/noduloutput.md
**Строка:** 13  
**Текущая ссылка:** `[Utilizing the NodulInput node to create a scenario of the Nodul type](../../introduction.md)`  
**Правильный путь:** `../../custom_nodes/creating_a_dynamic_form_for_a_scenario_of_the_nodul.md`  
**Или:** `../../custom_nodes/nodulinput.md` (если речь о самом узле)

---

### 3. docs/integrations/custom_nodes/nodulinput.md
**Строка:** 15  
**Текущая ссылка:** `[Utilizing the NodulInput node to create a scenario of the Nodul type](../../introduction.md)`  
**Правильный путь:** `../../custom_nodes/creating_a_dynamic_form_for_a_scenario_of_the_nodul.md`  
**Или:** `../../custom_nodes/nodulinput.md` (если речь о самом узле)

---

### 4. docs/integrations/core_nodes/wait.md
**Строка:** 18  
**Текущая ссылка:** `[the example of using the Wait node](../../introduction.md)`  
**Правильный путь:** `../wait.md` (ссылка на сам узел)  
**Или:** `../../documentation/visual_builder/building_scenarios.md` (если нужен пример использования)

---

### 5. docs/integrations/core_nodes/setvariables.md
**Строка:** 13  
**Текущая ссылка:** `[Example scenario using SetVariables and the add operator](../../introduction.md)`  
**Правильный путь:** `../setvariables.md` (ссылка на сам узел)  
**Или:** `../../documentation/visual_builder/building_scenarios.md` (если нужен пример сценария)

---

### 6. docs/integrations/core_nodes/setglobalvariables.md
**Строка:** 16  
**Текущая ссылка:** `[Global Variables](../../introduction.md)`  
**Правильный путь:** `../../documentation/visual_builder/variables/creating_and_editing_variables.md`  
**Или:** `../setglobalvariables.md` (если речь о самом узле)

---

### 7. docs/integrations/core_nodes/getglobalvariables.md
**Строка:** 13  
**Текущая ссылка:** `[Global Variables](../../introduction.md)`  
**Правильный путь:** `../../documentation/visual_builder/variables/creating_and_editing_variables.md`  
**Или:** `../getglobalvariables.md` (если речь о самом узле)

---

### 8. docs/documentation/visual_builder/routes.md
**Строка:** 41  
**Текущая ссылка:** `[Scenario example using conditions in routes](../../introduction.md)`  
**Правильный путь:** `../routes.md` (ссылка на саму статью)  
**Или:** `../building_scenarios.md` (если нужен пример сценария)

---

### 9. docs/documentation/visual_builder/execution_history.md
**Строка:** 8  
**Текущая ссылка:** `[Run once Scenario Execution](../../introduction.md)`  
**Правильный путь:** `../../integrations/core_nodes/trigger_on_run_once.md`

**Строка:** 43  
**Текущая ссылка:** `[copy the scenario execution from the history](../../introduction.md)`  
**Правильный путь:** `../execution_history.md` (ссылка на саму статью, где должна быть эта информация)

---

### 10. docs/documentation/visual_builder/code_tools/node_js.md
**Строка:** 54  
**Текущая ссылка:** `[JavaScript](../../../introduction.md)`  
**Правильный путь:** `../javascript.md`

---

### 11. docs/documentation/visual_builder/building_scenarios.md
**Множественные ссылки с правильными путями:**

| Строка | Текущая ссылка | Правильный путь |
|--------|----------------|-----------------|
| 31 | `[scenario](../../introduction.md)` | `../building_scenarios.md` (сама статья) |
| 31 | `[nodes](../../introduction.md)` | `../building_scenarios.md` (сама статья) |
| 31 | `[routes](../../introduction.md)` | `../routes.md` |
| 51 | `[Trigger on Webhook](../../introduction.md)` | `../../integrations/core_nodes/trigger_on_webhook.md` |
| 51 | `[sending JSON](../../introduction.md)` | `../passing_data.md` |
| 51 | `[SetGlobalVariables](../../introduction.md)` | `../../integrations/core_nodes/setglobalvariables.md` |
| 51 | `[Webhook Response](../../introduction.md)` | `../../integrations/core_nodes/webhook_response.md` |
| 55 | `[Trigger on Run Once](../../introduction.md)` | `../../integrations/core_nodes/trigger_on_run_once.md` |
| 59 | `[Trigger on Schedule](../../introduction.md)` | `../../integrations/core_nodes/trigger_on_schedule.md` |
| 70 | `[JavaScript](../../introduction.md)` | `../code_tools/javascript.md` |
| 70 | `[JavaScript code](../../introduction.md)` | `../code_tools/javascript.md` |
| 74 | `[SetGlobalVariables](../../introduction.md)` | `../../integrations/core_nodes/setglobalvariables.md` |
| 74 | `[GetGlobalVariables](../../introduction.md)` | `../../integrations/core_nodes/getglobalvariables.md` |
| 74 | `[SetVariables](../../introduction.md)` | `../../integrations/core_nodes/setvariables.md` |
| 74 | `[GetVariables](../../introduction.md)` | `../../integrations/core_nodes/getvariables.md` |
| 78 | `[Wait](../../introduction.md)` | `../../integrations/core_nodes/wait.md` |
| 82 | `[Headless Browser](../../introduction.md)` | `../code_tools/headless_browser.md` |
| 89 | `[JavaScript](../../introduction.md)` | `../code_tools/javascript.md` |
| 91 | `[Headless Browser](../../introduction.md)` | `../code_tools/headless_browser.md` |
| 105 | `[authorization](../../introduction.md)` | `../../integrations/authorizations/adding_and_configuring_authorizations.md` |
| 113 | `[Trigger on Webhook](../../introduction.md)` | `../../integrations/core_nodes/trigger_on_webhook.md` |
| 113 | `[Postman or Insomnia](../../introduction.md)` | Не определен (возможно, внешняя ссылка или удалить) |
| 127 | `[Headless Browser](../../introduction.md)` | `../code_tools/headless_browser.md` |
| 127 | `[Trigger on Webhook](../../introduction.md)` | `../../integrations/core_nodes/trigger_on_webhook.md` |
| 169 | `[global variables](../../introduction.md)` | `../variables/creating_and_editing_variables.md` |
| 169 | `[local variables](../../introduction.md)` | `../variables/creating_and_editing_variables.md` |
| 171 | `[variables](../../introduction.md)` | `../variables/creating_and_editing_variables.md` |
| 171 | `[global variables](../../introduction.md)` | `../variables/creating_and_editing_variables.md` |
| 171 | `[Headless Browser](../../introduction.md)` | `../code_tools/headless_browser.md` |
| 171 | `[JavaScript](../../introduction.md)` | `../code_tools/javascript.md` |
| 173 | `[interface](../../introduction.md)` | `../variables/creating_and_editing_variables.md` |
| 180 | `[JavaScript](../../introduction.md)` | `../code_tools/javascript.md` |
| 180 | `[Headless Browser](../../introduction.md)` | `../code_tools/headless_browser.md` |
| 238 | `[SetGlobalVariables](../../introduction.md)` | `../../integrations/core_nodes/setglobalvariables.md` |
| 245 | `[authorization](../../introduction.md)` | `../../integrations/authorizations/adding_and_configuring_authorizations.md` |
| 254 | `[Trigger on Run Once](../../introduction.md)` | `../../integrations/core_nodes/trigger_on_run_once.md` |
| 256 | `[history](../../introduction.md)` | `../execution_history.md` |
| 258 | `[copy the link to the scenario run](../../introduction.md)` | `../execution_history.md` |
| 267 | `[version](../../introduction.md)` | `../version_history.md` |
| 269 | `[Trigger on Webhook](../../introduction.md)` | `../../integrations/core_nodes/trigger_on_webhook.md` |

---

### 12. docs/documentation/databases/database/modifying_data_in_a_collection.md
**Строка:** 15  
**Текущая ссылка:** `[querrying collection](../../../introduction.md)`  
**Правильный путь:** `../querying_collection.md`

---

## Итого

**Найдено ссылок:** 36+ (в файле `building_scenarios.md` очень много ссылок)

**Файлов с битыми ссылками:** 12

## Примечание

Все эти ссылки ведут на корневой файл `docs/introduction.md`, который является стартовой страницей документации и не содержит конкретной информации, на которую ссылаются эти ссылки. 

**Большинство ссылок можно легко исправить, заменив их на правильные пути к соответствующим статьям:**
- Узлы (nodes) → `docs/integrations/core_nodes/[имя_узла].md`
- JavaScript → `docs/documentation/visual_builder/code_tools/javascript.md`
- Headless Browser → `docs/documentation/visual_builder/code_tools/headless_browser.md`
- Variables → `docs/documentation/visual_builder/variables/creating_and_editing_variables.md`
- Authorization → `docs/integrations/authorizations/adding_and_configuring_authorizations.md`
- Routes → `docs/documentation/visual_builder/routes.md`
- History → `docs/documentation/visual_builder/execution_history.md`
- Version → `docs/documentation/visual_builder/version_history.md`
