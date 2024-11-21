var htmlFileInfoList = ["concept_adding_annotations.html@@@\u6DFB\u52A0\u6CE8\u91CA@@@\u6CE8\u91CA\u529F\u80FD\u652F\u6301\u591A\u5F69\u6807\u6CE8\uFF0C\u5E2E\u52A9\u9AD8\u6548\u8BB0\u5F55\u9605\u8BFB\u611F\u60F3\u6216\u5B66\u672F\u89C1\u89E3\u3002...","concept_adding_annotations_to_notes.html@@@\u901A\u8FC7\u6CE8\u91CA\u6DFB\u52A0\u7B14\u8BB0@@@\u81EA\u52A8\u751F\u6210\u57FA\u4E8E\u6CE8\u91CA\u7684\u7B14\u8BB0\uFF0C\u5E76\u652F\u6301\u683C\u5F0F\u81EA\u5B9A\u4E49\u3002...","concept_adding_individual_notes.html@@@\u6DFB\u52A0\u72EC\u7ACB\u7B14\u8BB0@@@\u72EC\u7ACB\u7B14\u8BB0\u9002\u5408\u8BB0\u5F55\u4E0E\u5177\u4F53\u6587\u732E\u6761\u76EE\u65E0\u5173\u7684\u5185\u5BB9\uFF0C\u4FBF\u4E8E\u5B66\u672F\u7BA1\u7406\u3002...","concept_deleting_annotations.html@@@\u5220\u9664\u6CE8\u91CA@@@\u5220\u9664\u4E0D\u518D\u9700\u8981\u7684\u6807\u6CE8\uFF0C\u4FDD\u6301\u6587\u6863\u6574\u6D01\u3002...","concept_highlights.html@@@\u9AD8\u4EAE@@@\u9AD8\u4EAE\u6587\u672C\u662F\u5FEB\u901F\u6807\u8BB0\u6587\u732E\u91CD\u70B9\u7684\u5E38\u7528\u65B9\u6CD5\uFF0C\u4FBF\u4E8E\u540E\u7EED\u6574\u7406\u3002...","concept_related_documents.html@@@\u5173\u8054\u6587\u732E@@@\u7B14\u8BB0\u95F4\u53EF\u5EFA\u7ACB\u6761\u76EE\u5173\u8054\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u76F8\u5173\u6587\u732E\u3002...","cshelp.html@@@Context Sensitive Help@@@...","reference_individual_notes.html@@@\u72EC\u7ACB\u7B14\u8BB0@@@\u72EC\u7ACB\u7B14\u8BB0\u548C\u5B50\u7B14\u8BB0\u5728\u672C\u8D28\u4E0A\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u4E0D\u8FC7\u72EC\u7ACB\u7B14\u8BB0\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u4E00\u4E2A\u6761\u76EE\uFF0C\u72EC\u7ACB\u7B14\u8BB0\u663E\u793A\u65F6\u548C\u6761\u76EE\u662F\u4E00\u4E2A\u7EA7\u522B\u3002...","reference_related_documents.html@@@\u5173\u8054\u903B\u8F91@@@\u5173\u8054\u5173\u7CFB\u662F\u53CC\u5411\u7684\uFF0C\u4F46\u4E0D\u5177\u5907\u4F20\u9012\u6027\u5373\u6761\u76EEA\u4E0EB\u5173\u8054\uFF0CZotero\u4F1A\u81EA\u52A8\u8BA9B\u5173\u8054A\uFF1B\u82E5A\u5173\u8054B\uFF0CB\u5173\u8054C\uFF0CA\u5E76\u4E0D\u4F1A\u81EA\u52A8\u5173\u8054C\u3002\u3002...","task_adding_annotations.html@@@\u5728 PDF \u6587\u6863\u4E2D\u6DFB\u52A0\u6CE8\u91CA@@@\u5728\u754C\u9762\u4E0A\u90E8\u9009\u62E9 \u201C\u6DFB\u52A0\u7B14\u8BB0\u201D \u56FE\u6807\u3002 \u70B9\u51FB\u989C\u8272\u5757\u9009\u62E9\u6CE8\u91CA\u989C\u8272\u3002 \u5355\u51FB\u76EE\u6807\u4F4D\u7F6E\uFF0C\u952E\u5165\u7B14\u8BB0\u5185\u5BB9\u3002 \u5355\u51FB\u4EFB\u610F\u7A7A\u767D\u5904\u4EE5\u5173\u95ED\u5BF9\u8BDD\u6846\u3002...","task_adding_annotations_to_notes.html@@@\u901A\u8FC7\u6CE8\u91CA\u6DFB\u52A0\u7B14\u8BB0@@@\u6253\u5F00 PDF \u6587\u4EF6\uFF0C\u53F3\u952E\u70B9\u51FB\uFF0C\u9009\u62E9 \u201C\u901A\u8FC7\u6CE8\u91CA\u6DFB\u52A0\u7B14\u8BB0\u201D \u3002 \u81EA\u5B9A\u4E49\u7B14\u8BB0\u5185\u5BB9\u683C\u5F0F\u3002...","task_adding_individual_notes.html@@@\u6DFB\u52A0\u72EC\u7ACB\u7B14\u8BB0@@@\u70B9\u51FB Zotero \u5DE5\u5177\u680F\u4E0A\u7684 \u201C\u65B0\u5EFA\u72EC\u7ACB\u7B14\u8BB0\u201D \u56FE\u6807\u3002 \u6210\u529F\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u72EC\u7ACB\u7B14\u8BB0\u3002...","task_deleting_annotations.html@@@\u5220\u9664\u6CE8\u91CA@@@\u9009\u4E2D\u6CE8\u91CA\u56FE\u6807\u3002 \u70B9\u51FB\u53F3\u4FA7 \u201C\u4E09\u70B9\u83DC\u5355\u201D \uFF0C\u9009\u62E9 \u201C\u5220\u9664\u201D \u3002 \u6216\u5728\u9009\u4E2D\u6CE8\u91CA\u56FE\u6807\u540E\u6309\u952E\u76D8 \u232B \u5220\u9664\u952E \u3002...","task_highlights.html@@@\u5728 PDF \u6587\u6863\u4E2D\u6DFB\u52A0\u9AD8\u4EAE\u6216\u4E0B\u5212\u7EBF@@@\u6253\u5F00 PDF \u6587\u6863\u3002 \u9009\u4E2D\u76EE\u6807\u53E5\u5B50\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807\u4E3A\u5176 \u9AD8\u4EAE \uFF0C\u6216\u70B9\u51FB\u53F3\u4FA7\u56FE\u6807\u4E3A\u5176\u6DFB\u52A0 \u4E0B\u5212\u7EBF \u3002 \u9009\u4E2D\u7684\u53E5\u5B50\u5DF2\u6210\u529F\u9AD8\u4EAE\u6216\u6DFB\u52A0\u4E0B\u5212\u7EBF\u3002...","task_related_documents.html@@@\u5173\u8054\u6587\u732E@@@\u70B9\u51FB \u201C\u5173\u8054\u6587\u732E\u201D \u680F\u4E2D\u7684 \u201C+\u201D \u6309\u94AE\u3002 \u786E\u5B9A\u5173\u8054\u6587\u732E\uFF0C\u70B9\u51FB \u201C\u9009\u62E9\u201D \u3002 \u6DFB\u52A0\u5173\u8054\u6761\u76EE\u540E\uFF0C\u5355\u51FB\u5173\u8054\u7684\u6761\u76EE\u5C31\u4F1A\u8DF3\u8F6C\u5230\u8BE5\u5173\u8054\u6761\u76EE\u6240\u5728\u7684\u4F4D\u7F6E\u3002...","topic_adding_annotations.html@@@5.1.2 \u6DFB\u52A0\u6CE8\u91CA@@@...","topic_adding_annotations_to_notes.html@@@5.1.4 \u901A\u8FC7\u6CE8\u91CA\u6DFB\u52A0\u7B14\u8BB0@@@...","topic_adding_individual_notes.html@@@5.1.5 \u6DFB\u52A0\u72EC\u7ACB\u7B14\u8BB0@@@...","topic_adding_notes.html@@@5.1 \u6DFB\u52A0\u7B14\u8BB0@@@...","topic_deleting_annotations.html@@@5.1.3 \u5220\u9664\u6CE8\u91CA@@@...","topic_highlights.html@@@5.1.1 \u9AD8\u4EAE@@@...","topic_manage_notes.html@@@5.2 \u7BA1\u7406\u7B14\u8BB0@@@...","topic_notes_managements.html@@@5 \u7B14\u8BB0\u7BA1\u7406@@@...","topic_related_documents.html@@@5.2.1 \u5173\u8054\u6587\u732E@@@..."];
