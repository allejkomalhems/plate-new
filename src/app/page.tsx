import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';
import { ThemeProvider } from '@/components/context/theme-provider';

export default function Page() {
  return (
    <ThemeProvider>
      <div className="h-screen w-full">
        <PlateEditor />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
