import { mount } from "@vue/test-utils";
import { Badge } from "@/shared/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { Toaster } from "@/shared/ui/sonner";
import Sonner from "@/shared/ui/sonner/Sonner.vue";

describe("shared ui components", () => {
  it("renders button, badge, separator, and toaster", () => {
    const wrapper = mount({
      components: { Badge, Button, Separator, Sonner, Toaster },
      template: `
        <div>
          <Button>Save</Button>
          <Badge>New</Badge>
          <Separator />
          <Sonner />
        </div>
      `,
    });

    expect(wrapper.text()).toContain("Save");
    expect(wrapper.text()).toContain("New");
    expect(wrapper.find('[data-slot="separator"]').exists()).toBe(true);
  });

  it("renders card primitives", () => {
    const wrapper = mount({
      components: {
        Card,
        CardAction,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
      },
      template: `
        <Card>
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Card description</CardDescription>
            <CardAction>Action</CardAction>
          </CardHeader>
          <CardContent>Card content</CardContent>
          <CardFooter>Card footer</CardFooter>
        </Card>
      `,
    });

    expect(wrapper.text()).toContain("Card title");
    expect(wrapper.text()).toContain("Card description");
    expect(wrapper.text()).toContain("Card content");
    expect(wrapper.text()).toContain("Card footer");
  });
});
