# SectionVar02.astro как использовать

**Подключение в компоненте**

```astro
---
import SectionVar02 from "@components/sections/SectionVar02/SectionVar02.astro";
import { StaVar02 } from "@data/sections/StaVar02.ts";
---

<SectionVar02
    description={StaVar02.description}
    btnText={StaVar02.description}
/>
```

Компонент подключается как отдельная независимая секция, имеет свой `data` файл в `src/data/sections/StaVar02.ts`
