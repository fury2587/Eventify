import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventCalendar } from "@/components/event-calendar"
import { QRGenerator } from "@/components/qr-generator"

export default function Page() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="font-mono text-2xl bg-contain bg-slate-500  border-4 opacity-80  rounded-lg">Schedule Your Meeting⌛ & Generate QR Code</h1>
      
      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Event Calendar</TabsTrigger>
          <TabsTrigger value="qr">Barcode & QR Generator</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calendar" className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Event Calendar</h2>
          <p className="text-muted-foreground mb-4">
            Use this application to save dates for events and programmes. Click on any date to create an event.
          </p>
          <EventCalendar />
        </TabsContent>
        
        <TabsContent value="qr" className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Barcode & QR Code Generator</h2>
          <p className="text-muted-foreground mb-4">
            Generate QR codes and barcodes readable on smartphones. Supports coding of more than 4000 characters.
          </p>
          <QRGenerator />
        </TabsContent>
      </Tabs>
    </div>
  )
}

