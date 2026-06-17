<script setup lang="ts">
import type { FunctionalComponent, SVGAttributes } from "vue";
import {
  BellAlertIcon,
  BoltIcon,
  CodeBracketSquareIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  FolderIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/vue/24/outline";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";

interface InfoItem {
  icon: FunctionalComponent<SVGAttributes>;
  name: string;
  description: string;
}

const structures: InfoItem[] = [
  {
    icon: RocketLaunchIcon,
    name: "src/app",
    description:
      "应用组合层：routes、layout、providers、notifications、navigation、global styles。",
  },
  {
    icon: FolderIcon,
    name: "src/features",
    description: "业务归属目录：page、component、api、store、business logic 都跟随 feature。",
  },
  {
    icon: PuzzlePieceIcon,
    name: "src/shared",
    description: "跨业务基础能力：ui、api、lib、config。不要放具体业务行为。",
  },
  {
    icon: ShieldCheckIcon,
    name: "src/features/auth",
    description: "登录与 session 边界。token 读写只从这里走。",
  },
  {
    icon: DocumentTextIcon,
    name: "src/features/docs",
    description: "模板说明入口。AI 规则以根目录 AGENTS.md 为准。",
  },
];

const libraries: InfoItem[] = [
  {
    icon: BoltIcon,
    name: "Vite",
    description: "开发服务器与构建入口，插件通过环境变量按需启用。",
  },
  {
    icon: CubeTransparentIcon,
    name: "Vue",
    description: "Composition API、script setup 与 TypeScript 作为默认组件范式。",
  },
  {
    icon: PaintBrushIcon,
    name: "Tailwind CSS",
    description: "默认样式表达方式，替代 UnoCSS 并承载 shadcn-vue 主题变量。",
  },
  {
    icon: PuzzlePieceIcon,
    name: "shadcn-vue",
    description: "基础 UI primitives；源码组件只放 shared/ui。",
  },
  {
    icon: SparklesIcon,
    name: "Heroicons",
    description: "与 React 模板同系列的 SVG 图标，从 @heroicons/vue 按需导入。",
  },
  {
    icon: CodeBracketSquareIcon,
    name: "Axios",
    description: "HTTP 基础库；统一封装在 shared/api。",
  },
  {
    icon: BellAlertIcon,
    name: "vue-sonner",
    description: "Toast；业务通过 app/notifications 调用。",
  },
  {
    icon: ShieldCheckIcon,
    name: "Pinia",
    description: "应用状态容器，store 注册集中在 app/stores。",
  },
];
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <section class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <header class="flex flex-col gap-4">
        <Badge class="w-fit" variant="secondary"> Vue Template Guide </Badge>
        <div class="flex flex-col gap-3">
          <h1 class="text-3xl font-bold tracking-tight">项目开发文档</h1>
          <p class="max-w-3xl text-base leading-7 text-muted-foreground">
            这是给开发者看的极简索引。模板改为 app/features/shared 分层，UI 使用
            shadcn-vue，样式使用 Tailwind CSS。
          </p>
        </div>
      </header>

      <Separator />

      <section class="grid gap-4 md:grid-cols-2">
        <Card v-for="item in structures" :key="item.name">
          <CardHeader>
            <div class="flex items-center gap-3">
              <component :is="item.icon" class="size-5 text-muted-foreground" />
              <CardTitle>{{ item.name }}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{{ item.description }}</CardDescription>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>推荐开发流程</CardTitle>
          <CardDescription>保持业务内聚，基建沉到 app/shared，提交前执行验证。</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4 md:grid-cols-4">
          <div class="rounded-md bg-muted p-4">
            <strong>1. 建模块</strong>
            <p class="mt-2 text-sm text-muted-foreground">业务代码进 features。</p>
          </div>
          <div class="rounded-md bg-muted p-4">
            <strong>2. 配路由</strong>
            <p class="mt-2 text-sm text-muted-foreground">feature 暴露 routes，由 app 聚合。</p>
          </div>
          <div class="rounded-md bg-muted p-4">
            <strong>3. 写接口</strong>
            <p class="mt-2 text-sm text-muted-foreground">请求走 shared/api。</p>
          </div>
          <div class="rounded-md bg-muted p-4">
            <strong>4. 做验证</strong>
            <p class="mt-2 text-sm text-muted-foreground">执行 pnpm lint/typecheck/build。</p>
          </div>
        </CardContent>
      </Card>

      <section class="grid gap-3 md:grid-cols-2">
        <Card v-for="item in libraries" :key="item.name">
          <CardHeader>
            <div class="flex items-center gap-3">
              <component :is="item.icon" class="size-5 text-muted-foreground" />
              <CardTitle>{{ item.name }}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{{ item.description }}</CardDescription>
          </CardContent>
        </Card>
      </section>
    </section>
  </main>
</template>
