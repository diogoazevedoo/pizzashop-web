import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogHeader>Order: 84h54u5h</DialogHeader>
        <DialogDescription>Order Details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Client</TableCell>
              <TableCell className="flex justify-end">Diogo Azevedo</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex justify-end">
                (+351) 910859686
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                idiogoazevedoo@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Ordered at
              </TableCell>
              <TableCell className="flex justify-end">3 minutes ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">SubTotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pepperoni Pizza - Large</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">18,99€</TableCell>
              <TableCell className="text-right">18,99€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bolognese Pizza - Large</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">18,99€</TableCell>
              <TableCell className="text-right">18,99€</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-medium">37,98€</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
